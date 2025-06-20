
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ABOUT US
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Medical Professional"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Health systems are under greater pressure than ever, but along with its other uses, 
                the potential of AI to provide much-needed relief to overworked doctors can streamline 
                the triage process. It seamlessly integrates into the medical workflow and uses the 
                same logic physicians embrace at medical school.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By delivering enhanced insights by calculating the likelihood of particular conditions 
                based on the patient's symptoms, AI can facilitate a faster, automated route to outcome 
                by reducing the steps that doctors need to take, ultimately meaning quicker answers and 
                patient recovery. AI can help providers determine who really needs to see a doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              Driving innovation in healthcare through AI and machine learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Precision",
                description: "Delivering highly accurate diagnostic results with clinical-grade precision"
              },
              {
                icon: Users,
                title: "Accessibility",
                description: "Making advanced diagnostic tools accessible to healthcare providers worldwide"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to the highest standards of medical AI technology"
              },
              {
                icon: Globe,
                title: "Innovation",
                description: "Pioneering the future of AI-powered healthcare solutions"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Advanced Technology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our nail disease detection system employs state-of-the-art deep learning models 
                including VGG16, ResNet50, InceptionV3, and Xception architectures. These proven 
                neural networks have been specifically trained on extensive datasets of nail images 
                to identify various dermatological conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through transfer learning techniques, we've achieved remarkable accuracy rates while 
                maintaining fast processing times. Our system can analyze nail color, shape, and 
                texture features to provide comprehensive diagnostic insights.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">99.2%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">&lt;2s</div>
                  <div className="text-sm text-gray-600">Processing Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
                alt="AI Technology"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us in revolutionizing medical diagnosis with AI-powered nail disease detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Get Started
            </button>
            <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
