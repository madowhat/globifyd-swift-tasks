
import { Card, CardContent } from "@/components/ui/card";
import { Search, Send, Check } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Request Your Errand",
    description: "Tell us what you need done, where, and when. Our smart matching system finds the perfect Globifyd agent for your task."
  },
  {
    icon: Send,
    title: "We Handle Everything",
    description: "Our vetted local agents execute your errand with precision, keeping you updated every step of the way with real-time tracking."
  },
  {
    icon: Check,
    title: "Mission Accomplished",
    description: "Receive confirmation, photos, and receipts. Your errand is complete, and your satisfaction is guaranteed."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Globifyd Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your errands done anywhere in the world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-indigo-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
