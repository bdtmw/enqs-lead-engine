import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Contact", id: "lead-form" },
];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <img src={logo} alt="ENQS" className="h-10 brightness-[10]" />
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
        <Button
          onClick={() => scrollTo("lead-form")}
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
