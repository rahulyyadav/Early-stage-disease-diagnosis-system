
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Info, Shield, Microscope } from 'lucide-react';

const NailInfo = () => {
  const commonDiseases = [
    {
      name: "Onychomycosis",
      description: "Fungal infection of the nail, causing thickening, discoloration, and crumbling",
      symptoms: ["Yellow or brown discoloration", "Thickened nails", "Brittle or crumbling texture"],
      severity: "Moderate"
    },
    {
      name: "Nail Psoriasis",
      description: "Autoimmune condition affecting nail matrix and bed",
      symptoms: ["Pitting", "Oil spots", "Nail separation", "Ridging"],
      severity: "High"
    },
    {
      name: "Bacterial Infection",
      description: "Bacterial invasion causing inflammation and pain",
      symptoms: ["Redness", "Swelling", "Pain", "Pus formation"],
      severity: "High"
    },
    {
      name: "Melanoma",
      description: "Malignant tumor that can appear under or around nails",
      symptoms: ["Dark streaks", "Rapid growth", "Irregular borders"],
      severity: "Critical"
    }
  ];

  const preventionTips = [
    "Keep nails clean and dry",
    "Trim nails regularly and properly",
    "Avoid sharing nail tools",
    "Wear gloves when cleaning or gardening",
    "Choose breathable footwear",
    "Don't bite or pick at nails",
    "Use moisturizer on cuticles",
    "Regular health check-ups"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NAIL DISEASE INFORMATION
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to understanding nail diseases, their symptoms, and prevention methods
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="diseases">Diseases</TabsTrigger>
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="prevention">Prevention</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Understanding Nail Health</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nail diseases are common conditions that can affect anyone. Early detection and proper 
                    diagnosis are crucial for effective treatment and preventing complications.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our AI-powered system analyzes nail images to detect various conditions including 
                    fungal infections, bacterial infections, psoriasis, and even serious conditions 
                    like melanoma.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="text-center">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-teal-600 mb-2">15+</div>
                        <div className="text-sm text-gray-600">Conditions Detected</div>
                      </CardContent>
                    </Card>
                    <Card className="text-center">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">99.2%</div>
                        <div className="text-sm text-gray-600">Accuracy Rate</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
                    alt="Medical Analysis"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="diseases" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonDiseases.map((disease, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-gray-900">{disease.name}</CardTitle>
                        <Badge 
                          variant={disease.severity === 'Critical' ? 'destructive' : 
                                 disease.severity === 'High' ? 'secondary' : 'outline'}
                        >
                          {disease.severity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">{disease.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                        <ul className="space-y-1">
                          {disease.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="symptoms" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Warning Signs</h3>
                    <ul className="text-gray-600 space-y-2 text-left">
                      <li>• Persistent discoloration</li>
                      <li>• Unusual thickness</li>
                      <li>• Pain or tenderness</li>
                      <li>• Rapid changes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Info className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Early Indicators</h3>
                    <ul className="text-gray-600 space-y-2 text-left">
                      <li>• Slight color changes</li>
                      <li>• Minor ridging</li>
                      <li>• Texture variations</li>
                      <li>• Shape irregularities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Microscope className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">When to Test</h3>
                    <ul className="text-gray-600 space-y-2 text-left">
                      <li>• Any concerning changes</li>
                      <li>• Persistent symptoms</li>
                      <li>• Family history</li>
                      <li>• Regular screening</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prevention" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Prevention Guidelines</h2>
                  <p className="text-lg text-gray-600">
                    Most nail diseases can be prevented with proper nail care and hygiene practices.
                  </p>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 text-teal-600 mr-2" />
                        Daily Care Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {preventionTips.map((tip, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop"
                    alt="Healthcare Prevention"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  
                  <Card className="bg-gradient-to-r from-teal-50 to-emerald-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Care</h3>
                      <p className="text-gray-600 mb-4">
                        Regular check-ups with healthcare professionals can help detect issues early.
                      </p>
                      <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-200">
                        Schedule Check-up
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NailInfo;
