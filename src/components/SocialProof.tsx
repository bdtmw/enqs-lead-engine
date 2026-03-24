import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "ENQS transformed our online presence. Within 3 months, our leads doubled and our cost per acquisition dropped by 40%.",
    name: "Sarah Mitchell",
    role: "CEO, GrowthStack",
  },
  {
    quote: "The team is sharp, fast, and actually cares about results. They feel like an extension of our own team.",
    name: "James Okoro",
    role: "Founder, NovaBuild",
  },
  {
    quote: "Best agency we've worked with. No fluff, no excuses — just real results that impact the bottom line.",
    name: "Maria Chen",
    role: "CMO, Elevate Health",
  },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 bg-muted" ref={ref}>
      <div className={`container mx-auto px-6 max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted by Growing Businesses
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-2xl p-8 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
