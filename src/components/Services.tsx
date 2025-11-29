import { Card } from "@/components/ui/card";
import { Brain, Smartphone, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Software Development",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and transform your business operations with cutting-edge AI solutions.",
    features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "AI Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android, engineered for performance and scalability.",
    features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Modern, responsive websites that convert visitors into customers. From landing pages to full-scale web applications, we build for growth.",
    features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"]
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/90">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technology Solutions That
            <span className="gradient-text"> Scale With You</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver enterprise-level solutions designed specifically for small business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-gradient-card border-border/50 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-2 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
