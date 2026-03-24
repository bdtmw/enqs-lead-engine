import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <img src={logo} alt="ENQS" className="h-10 brightness-[10]" />
        <Button
          onClick={scrollToForm}
          size="sm"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-lg"
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
