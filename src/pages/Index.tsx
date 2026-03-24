import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <SocialProof />
      <HowItWorks />
      <CtaSection />
      <LeadForm />
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Index;
