
import { Globe, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "150+",
    label: "Countries Served",
    description: "Global network coverage"
  },
  {
    icon: Users,
    number: "50K+",
    label: "Trusted Agents",
    description: "Vetted professionals worldwide"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Service Availability",
    description: "Round-the-clock support"
  }
];

export const GlobalReach = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-2 0c0-9-7-16-16-16s-16 7-16 16 7 16 16 16 16-7 16-16z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Truly Global Reach
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our extensive network of trusted agents spans across continents, 
            ensuring your errands are handled with local expertise and global standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Whether you need to send flowers to Tokyo, deliver documents in London, 
            or coordinate a business meeting in São Paulo, Globifyd makes it happen.
          </p>
        </div>
      </div>
    </section>
  );
};
