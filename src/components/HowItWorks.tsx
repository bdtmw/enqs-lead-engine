const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, and challenges in a free 30-minute strategy session.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description: "We build a tailored growth plan with clear milestones, timelines, and expected outcomes.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "We execute, measure, and optimize — delivering results you can see in your revenue.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary font-heading font-bold text-xl mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
