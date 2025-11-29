import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Transform
          <br />
          <span className="gradient-text">Your Digital Presence?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss how Redline Agency can accelerate your business growth with custom technology solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-glow transition-all hover:shadow-[0_0_80px_hsl(0_84%_58%/0.35)] hover:scale-105"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/50 bg-secondary/50 hover:bg-secondary text-foreground px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all hover:border-primary"
          >
            Schedule Consultation
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Free consultation • No obligations • Quick response
        </p>
      </div>
    </section>
  );
};

export default CTA;
