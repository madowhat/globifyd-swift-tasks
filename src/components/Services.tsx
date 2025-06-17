
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Briefcase, Globe, Crown } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Personal Errands",
    description: "Gift delivery to loved ones abroad, meal delivery for family, shopping assistance, and personal care services worldwide.",
    features: ["Gift delivery", "Meal delivery", "Shopping assistance", "Family care services"]
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Corporate errands, document delivery, meeting coordination, and professional support services across global markets.",
    features: ["Document delivery", "Meeting coordination", "Corporate errands", "Professional support"]
  },
  {
    icon: Globe,
    title: "International Logistics",
    description: "Complex logistics solutions, customs handling, international shipping coordination, and supply chain management.",
    features: ["Customs handling", "Shipping coordination", "Supply chain", "Global logistics"]
  },
  {
    icon: Crown,
    title: "Concierge Services",
    description: "Premium lifestyle management, event planning, travel coordination, and luxury service arrangements worldwide.",
    features: ["Lifestyle management", "Event planning", "Travel coordination", "Luxury services"]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Global Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal care to business operations, we handle your errands with precision and care, 
            no matter where you are in the world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
