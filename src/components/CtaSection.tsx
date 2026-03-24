import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary" ref={ref}>
      <div className={`container mx-auto px-6 max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          Join 50+ businesses that have transformed their digital presence and revenue with ENQS.
        </p>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8 py-6 rounded-lg"
        >
          Get My Free Strategy Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
