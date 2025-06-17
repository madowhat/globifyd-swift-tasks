
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "New York, USA",
    text: "Globifyd helped me surprise my grandmother in Shanghai with her favorite flowers for her 90th birthday. The service was flawless and she was so happy!",
    rating: 5
  },
  {
    name: "Marcus Thompson",
    location: "London, UK",
    text: "As a business owner, I needed urgent document delivery in three different countries. Globifyd coordinated everything perfectly and saved my deal.",
    rating: 5
  },
  {
    name: "Isabella Rodriguez", 
    location: "Madrid, Spain",
    text: "When my son was studying abroad and got sick, Globifyd arranged meal delivery and care packages. They truly care about people.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Globifyd has helped thousands of people and businesses 
            connect across borders and accomplish their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
