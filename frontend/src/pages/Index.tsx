import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Shield, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  AI-Powered
                  <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Nail Disease
                  </span>
                  Detection
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced machine learning technology for early detection and
                  diagnosis of nail diseases. Get instant, accurate results to
                  help streamline medical diagnosis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg group"
                  onClick={() => navigate("/predict")}
                >
                  Try Prediction
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-6 text-lg"
                  onClick={() => navigate("/nail-info")}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="Medical Professional with Technology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">99.2% Accuracy</p>
                      <p className="text-xs text-gray-500">
                        Clinically Validated
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -top-6 -right-6 bg-white shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Instant Results</p>
                      <p className="text-xs text-gray-500">&lt; 2 seconds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR PROJECT ON NAIL DISEASE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Human nail can be used for the prediction of various systemic
                and dermatological diseases. The proposed system - Nail Image
                Processing System helps us to the analysis of human nail and
                thereby predicting various nail diseases.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The input to the proposed system is the Human Palm Image. The
                nail portion is segmented and nail color, shape and texture
                features are extracted and taken together to form a feature
                vector and then analysis of nail is done which is used for the
                diagnosis of various nail diseases. The proposed system will
                help the doctors in the early diagnosis of diseases.
              </p>
              <Button
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
                size="lg"
                onClick={() => navigate("/predict")}
              >
                Predict Now
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
                alt="AI Technology Visualization"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MODELS EMPLOYED FOR THE PROJECT
            </h2>
            <p className="text-lg text-gray-600">Transfer Learning Models</p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "VGG16",
                description:
                  "VGG-16 is a convolutional neural network that is 16 layers deep. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.",
              },
              {
                name: "RESNET50",
                description:
                  "ResNet50 is a convolutional neural network that is 50 layers deep. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.",
              },
              {
                name: "INCEPTIONV3",
                description:
                  "InceptionV3 is a convolutional neural network that is 48 layers deep. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.",
              },
              {
                name: "XCEPTION",
                description:
                  "Xception is a convolutional neural network that is 71 layers deep. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-300 border-0 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {model.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description:
                  "Advanced machine learning algorithms analyze nail images with clinical precision",
              },
              {
                icon: Zap,
                title: "Instant Results",
                description:
                  "Get immediate diagnosis results in less than 2 seconds with high accuracy",
              },
              {
                icon: Users,
                title: "Healthcare Support",
                description:
                  "Designed to assist healthcare professionals in early disease detection",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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

export default Index;
