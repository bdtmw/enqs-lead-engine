import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-4xl">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-6 animate-fade-in">
          Digital Growth Partner
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          We Build Systems That
          <span className="text-secondary"> Generate Revenue</span>
        </h1>

        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Strategy, design, and technology — combined to help ambitious businesses attract, convert, and scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8 py-6 rounded-lg"
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-heading font-semibold text-base px-8 py-6 rounded-lg"
          >
            <Eye className="mr-2 h-5 w-5" />
            View Services
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/50 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <span>50+ Clients Served</span>
          <span className="w-1 h-1 rounded-full bg-secondary" />
          <span>$10M+ Revenue Generated</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block" />
          <span className="hidden sm:inline">5-Star Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
