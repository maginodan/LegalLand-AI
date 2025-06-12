
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleStartNowClick = () => {
    // Placeholder for Legal Advisory service link
    toast({
      title: "Legal Advisory Service",
      description: "Please add your Legal Advisory service link here. This button will redirect users to your RAG-powered legal advisory platform.",
    });
    console.log("Start Now clicked - Add your Legal Advisory service link here");
    // Example: window.open('YOUR_LEGAL_ADVISORY_LINK', '_blank');
  };

  const handleVerifyClick = () => {
    // Placeholder for Land Title Verification service link
    toast({
      title: "Land Title Verification",
      description: "Please add your Land Title Verification service link here. This button will redirect users to your Computer Vision verification platform.",
    });
    console.log("Verify clicked - Add your Land Title Verification service link here");
    // Example: window.open('YOUR_VERIFICATION_LINK', '_blank');
  };

  // Add smooth scrolling CSS
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero 
        onStartNowClick={handleStartNowClick}
        onVerifyClick={handleVerifyClick}
      />
      <Services />
      <About />
      <Team />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
