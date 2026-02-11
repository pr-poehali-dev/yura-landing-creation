import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnrollClick: () => void;
}

const HeroSection = ({ onEnrollClick }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(66, 63, 48, 0.85), rgba(45, 48, 38, 0.85)), url('https://cdn.poehali.dev/projects/0ef760dc-6cc5-49e2-9400-9dd830dad74c/files/4f46b67b-2366-47a2-8f2e-ef67edc45e15.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Ваши преимущества – <br/>наш вклад в Победу
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-semibold">
          Особые условия для защитников Отечества и их семей
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-lg font-semibold"
          onClick={onEnrollClick}
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
