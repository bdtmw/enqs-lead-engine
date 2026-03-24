import { Globe, BarChart3, Megaphone, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "High-converting websites built for speed, SEO, and user experience that turn visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Google, Meta, and LinkedIn that deliver measurable ROI.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Positioning, messaging, and visual identity that make your business impossible to ignore.",
  },
  {
    icon: Code,
    title: "Automation & Systems",
    description: "CRM, email flows, and lead funnels that work 24/7 — so your team can focus on closing.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className={`container mx-auto px-6 max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything You Need to Grow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <service.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
