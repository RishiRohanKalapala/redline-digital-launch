import { Check, Zap, Shield, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Development",
    description: "Rapid prototyping and deployment cycles that get your product to market faster than traditional agencies"
  },
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Enterprise-level solutions at small business prices. No compromises on quality, just smart pricing"
  },
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "Battle-tested code and infrastructure that scales with your business. Built for stability and growth"
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    description: "Technology that helps you punch above your weight class and compete with larger competitors"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Growing Businesses
              <span className="gradient-text"> Choose Redline</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We level the playing field by bringing enterprise-grade technology within reach of small-scale businesses. Your growth is our mission.
            </p>
            
            <div className="space-y-4">
              {[
                "No long-term contracts or commitments",
                "Dedicated project manager for every client",
                "Transparent pricing and timelines",
                "24/7 support and maintenance included"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-slide-up group"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
