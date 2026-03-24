import logo from "@/assets/enqs-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="ENQS" className="h-6 brightness-[10]" />
          <div className="flex items-center gap-6 text-primary-foreground/50 text-sm">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#lead-form" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <p className="text-primary-foreground/30 text-sm">
            © {new Date().getFullYear()} ENQS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
