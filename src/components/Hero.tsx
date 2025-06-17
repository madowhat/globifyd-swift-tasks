
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Globifyd
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-200 font-light">
            Smart errands. Anywhere. Anytime.
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted global partner for personal errands, business services, and international logistics. 
            From gift delivery to family abroad to complex business operations worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-200" />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-cyan-500 rounded-full opacity-25 animate-pulse delay-500"></div>
    </section>
  );
};
