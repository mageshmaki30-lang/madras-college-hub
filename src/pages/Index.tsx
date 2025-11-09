import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your Tech Journey Begins<br />
            <span className="text-primary">@ Madras Engineering College.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="hero" size="lg" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">Paid Internship</span> Opportunities
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">Modern Lab</span> Facilities
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">Industry-Ready</span> Curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



