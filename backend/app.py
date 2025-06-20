#import re
import numpy as np
import os
from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.inception_v3 import preprocess_input
from flask_cors import CORS
import logging
import io
import tensorflow as tf

app = Flask(__name__)
CORS(app)  # Allow all origins for development

logging.basicConfig(level=logging.INFO)

# Load TFLite model once
TFLITE_MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model_quantized.tflite')
interpreter = tf.lite.Interpreter(model_path=TFLITE_MODEL_PATH)
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Class labels
CLASS_NAMES = [
    'Darier_s disease', 'Muehrck-e_s lines', 'alopecia areata', 'beau_s lines', 'bluish nail',
    'clubbing', 'eczema', 'half and half nailes (Lindsay_s nails)', 'koilonychia', 'leukonychia',
    'onycholysis', 'pale nail', 'red lunula', 'splinter hemmorrage', 'terry_s nail', 'white nail', 'yellow nail'
]

@app.route('/predict', methods=['POST'])
def predict():
    logging.info(f"/predict called from {request.origin}")
    if 'image' not in request.files:
        logging.error("No image uploaded in request.files")
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    if file.filename == '':
        logging.error("No image selected (empty filename)")
        return jsonify({'error': 'No image selected'}), 400
    
    try:
        # Read file as bytes and use io.BytesIO for robust image loading
        img_bytes = file.read()
        img = image.load_img(io.BytesIO(img_bytes), target_size=(224, 224))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        # Ensure input type matches TFLite model
        x = x.astype(input_details[0]['dtype'])
        interpreter.set_tensor(input_details[0]['index'], x)
        interpreter.invoke()
        preds = interpreter.get_tensor(output_details[0]['index'])
        pred_idx = np.argmax(preds, axis=1)[0]
        pred_class = CLASS_NAMES[pred_idx]
        logging.info(f"Prediction successful: {pred_class}")
        return jsonify({'prediction': pred_class})
    except Exception as e:
        logging.exception("Error during prediction")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'Backend is running'})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(debug=False, host="0.0.0.0", port=port)