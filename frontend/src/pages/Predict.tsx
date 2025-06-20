import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const Predict = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setResult(null);

        // Create preview URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        toast({
          title: "Image uploaded successfully",
          description: "Ready for analysis",
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      console.log("Sending request to backend...");
      const response = await axios.post(
        "https://early-disease-prediction-on-human-nails.onrender.com/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000, // 30 second timeout
        }
      );

      console.log("Response received:", response.data);

      if (response.data && response.data.prediction) {
        setResult(response.data.prediction);
        toast({
          title: "Analysis complete",
          description: `Prediction: ${response.data.prediction}`,
        });
      } else {
        setResult("No prediction returned.");
        toast({
          title: "Error",
          description: "No prediction returned from server.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Axios error:", error);
      console.error("Error response:", error.response);

      let errorMessage = "Unknown error occurred";

      if (error.code === "ECONNREFUSED") {
        errorMessage =
          "Cannot connect to backend server. Please ensure the backend is running on port 8000.";
      } else if (error.response?.status === 403) {
        errorMessage = "Access forbidden. Please check CORS configuration.";
      } else if (error.response?.status === 400) {
        errorMessage = error.response.data?.error || "Invalid request";
      } else if (error.response?.status === 500) {
        errorMessage = error.response.data?.error || "Server error occurred";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setResult("Error during prediction.");
      toast({
        title: "Prediction failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (result: string) => {
    if (result.toLowerCase().includes("disease")) {
      return "text-red-600 bg-red-50 border-red-200";
    }
    return "text-green-600 bg-green-50 border-green-200";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NAIL DISEASE PREDICTION
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload an image of a nail to get instant AI-powered diagnosis and
              recommendations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Prediction Interface */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upload Section */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Upload className="h-5 w-5 text-teal-600 mr-2" />
                  Upload Nail Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors duration-200">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        Choose Image
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                  </label>
                </div>

                {/* File Info */}
                {selectedFile && (
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {selectedFile.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Analyze Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertCircle className="h-5 w-5 text-teal-600 mr-2" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Preview */}
                {previewUrl && (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Uploaded nail"
                      className="w-full h-48 object-cover rounded-lg shadow-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                )}

                {/* Analysis Progress */}
                {isAnalyzing && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Analyzing Image...
                        </p>
                        <p className="text-sm text-gray-500">
                          Processing with AI models
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Results Display */}
                {result && (
                  <div
                    className={`p-4 rounded-lg border-2 ${getSeverityColor(
                      result
                    )}`}
                  >
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Diagnosis Result</p>
                        <p className="text-sm mt-1">{result}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {result && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Recommendations
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • Consult with a dermatologist for professional
                        diagnosis
                      </li>
                      <li>• Keep the affected area clean and dry</li>
                      <li>• Avoid sharing nail tools or footwear</li>
                      <li>• Follow prescribed treatment if available</li>
                    </ul>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Disclaimer:</strong> This AI analysis is for
                    informational purposes only and should not replace
                    professional medical advice. Always consult with a
                    healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our AI analysis process in simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Image",
                description:
                  "Select and upload a clear image of the nail area you want to analyze",
              },
              {
                step: "02",
                title: "AI Analysis",
                description:
                  "Our advanced neural networks process the image using multiple AI models",
              },
              {
                step: "03",
                title: "Get Results",
                description:
                  "Receive instant diagnosis with confidence scores and recommendations",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Predict;
