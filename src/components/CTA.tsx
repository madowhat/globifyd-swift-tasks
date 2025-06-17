
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Go Global?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Join thousands of satisfied customers who trust Globifyd 
          for their personal and business errands worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Your First Errand
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transition-all duration-300">
            Contact Our Team
          </Button>
        </div>
        
        <p className="text-sm text-blue-200 mt-6">
          No setup fees • Pay per task • 100% satisfaction guarantee
        </p>
      </div>
    </section>
  );
};
