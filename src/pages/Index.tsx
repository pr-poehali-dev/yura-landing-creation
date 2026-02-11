import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ApplicationForm from "@/components/sections/ApplicationForm";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onEnrollClick={scrollToForm} />
      <HeroSection onEnrollClick={scrollToForm} />
      <AboutSection />
      <ApplicationForm />
    </div>
  );
};

export default Index;
