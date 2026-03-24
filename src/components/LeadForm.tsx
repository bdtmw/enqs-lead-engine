import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("We'll be in touch within 24 hours!");
    }, 1000);
  };

  return (
    <section id="lead-form" className="py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                You're All Set!
              </h3>
              <p className="text-muted-foreground">
                We'll review your info and reach out within 24 hours to schedule your free strategy call.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Get Your Free Strategy Call
                </h2>
                <p className="text-muted-foreground">
                  No obligation. No pressure. Just a clear plan for growth.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  type="text"
                  placeholder="Your Name"
                  maxLength={100}
                  className="h-12 rounded-lg bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email Address"
                  maxLength={255}
                  className="h-12 rounded-lg bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  type="text"
                  placeholder="Company / Website (optional)"
                  maxLength={200}
                  className="h-12 rounded-lg bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base rounded-lg"
                >
                  {loading ? "Submitting..." : "Get My Free Strategy Call"}
                  {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>

              <p className="text-center text-muted-foreground text-xs mt-4">
                ✓ Free consultation &nbsp; ✓ No spam ever &nbsp; ✓ Reply within 24h
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
