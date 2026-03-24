import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCta = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={scrollToForm}
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-full shadow-lg shadow-secondary/30 px-5 py-6"
      >
        Book a Call
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FloatingCta;
