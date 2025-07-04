# 🧠 Early Stage Disease Diagnosis System Using Human Nail Image Processing

> A deep learning–powered, non-invasive healthcare solution for early disease detection through nail image analysis.

---

## 📌 Overview

**Early detection saves lives.** This project aims to democratize access to basic health screening by analyzing nail images to predict potential early-stage health conditions. Using deep learning, particularly CNN-based image classification, the system identifies subtle anomalies in human nails correlated with diseases such as anemia, diabetes, liver conditions, and more.

Designed for both clinical support and individual use, this solution combines medical insight with advanced AI techniques to promote proactive, accessible healthcare.

---

🎥 [Click here to watch the demo video](https://youtu.be/k71xUDj2Efo)

---

## 🎯 Problem Statement

Millions delay medical diagnosis due to cost, distance, or fear of invasive tests. Fingernails are biomarkers that can reflect various internal conditions — yet this potential remains underutilized. Our system uses nail image processing to bridge this gap and provide early warnings — all from a smartphone image.

---

## ⚙️ Project Flow

The project is structured as an end-to-end system that enables users to upload nail images and receive early disease predictions in real-time using a pre-trained deep learning model served through a Flask application.

### 🧭 Step-by-Step Workflow:

1. **User Interaction**

   - The user interacts with a clean web interface built using HTML and Flask.
   - The user selects or uploads a nail image.

2. **Model Prediction**
   - The uploaded image is sent to the Flask backend.
   - The image is processed by a VGG16-based deep learning model.
   - The predicted disease condition is returned and displayed on the UI.

---

### 🔨 Key Development Steps

#### 📦 Data Preparation

- Collect human nail images from trusted sources.
- Organize data into `train` and `test` folders with class-wise subdirectories.

#### 🧠 Model Building

- Import essential libraries (`TensorFlow`, `Keras`, `OpenCV`, etc.)
- Load the base **VGG16** model (without top layers).
- Add custom `Flatten` and `Dense` layers for classification.
- Add an output layer with `softmax` activation (multi-class classification).
- Compile the model with appropriate optimizer and loss function.

#### 🔁 Data Augmentation

- Import `ImageDataGenerator` from Keras.
- Configure augmentation techniques for training and validation sets.
- Apply transformations and prepare generators for both sets.

#### 🏋️ Training

- Train the model on the dataset.
- Monitor validation accuracy and loss.
- Save the trained model (`.h5` file).

#### 🧪 Testing

- Evaluate the model performance on unseen test images.
- Use accuracy, confusion matrix, and class-wise metrics for analysis.

---

### 🌐 Application Building

1. **Frontend**

   - Create a simple HTML form to accept image input.
   - Use Bootstrap or CSS for a clean layout (optional).

2. **Backend (Flask)**

   - Load the saved `.h5` model at server start.
   - Accept uploaded image via POST request.
   - Preprocess the image and pass it to the model.
   - Display the predicted output to the user.

3. **Run the Application**

   ```bash
   python app.py
   ```

4. **Final Output**
   - The user is shown the most probable disease condition (or "Healthy") based on nail image.

---

## 🔬 Technologies Used

| Component          | Tech Stack                                |
| ------------------ | ----------------------------------------- |
| Frontend           | HTML / CSS / Bootstrap (optional)         |
| Backend            | Python, Flask                             |
| Model Architecture | VGG16 (transfer learning)                 |
| Libraries          | TensorFlow / Keras, NumPy, OpenCV, Pillow |
| Data Augmentation  | Keras ImageDataGenerator                  |
| Deployment         | Localhost / Render / Vercel / Docker      |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rahulyyadav/Early-Stage-Disease-Diagnosis-System-Using-Human-Nail-Image-Processing-Using-Deep-Learning.git
```

```bash
cd nail-diagnosis-ai
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Train the Model (Optional)

```bash
python train.py
```

### 4. Run the Flask App

```bash
cd frontend
npm run dev
```

```bash
python backend/app.py
```

```bash
Note: if app.py is throwing some error, first install requirements.txt inside the virtual environment. Then try running python again.
```

### 5. Visit the Web App

Open your browser and navigate to:

```

http://127.0.0.1:5000

```

---

## 🧪 Dataset

We use a custom-built dataset consisting of annotated human nail images labeled with conditions such as:

- Anemia
- Jaundice
- Fungal infections
- Healthy

> We respect privacy and only use publicly available or consented datasets.

---

## 🔐 Ethical Considerations

This system is **not a substitute for a certified medical diagnosis**. Predictions are probabilistic and must be followed by professional medical consultation.

We strictly adhere to:

- **Data privacy**
- **Bias mitigation**
- **Transparency and explainability**

---

## 🧠 Future Scope

- Expand dataset size and diversity
- Integrate LLMs for conversational health feedback
- Enable real-time mobile diagnosis
- Improve model explainability with Grad-CAM visualizations
- Collaborate with medical institutions for clinical testing

---

## 👨‍💻 Contributors

- **Rahul Yadav** – AI/ML Developer
  📧 [rahulyyadav21@gmail.com](mailto:rahulyyadav21@gmail.com)
  🌐 [https://rahul-yadav.com.np/](https://https://rahul-yadav.com.np/)

- **Ayush M Singh** - Frontend Developer
  📧 [ayush.msingh2023@vitstudent.ac.in](mailto:ayush.msingh2023@vitstudent.ac.in)
- **Ayush Yadav** - Frontend Developer & Bug fixes
  📧 [ayush.yadav2022b@vitstudent.ac.in](mailto:ayush.yadav2022b@vitstudent.ac.in)

Contributions are welcome! Feel free to fork this repo and open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

```
