import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnrollClick: () => void;
}

const HeroSection = ({ onEnrollClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/0ef760dc-6cc5-49e2-9400-9dd830dad74c/files/13613e6c-bd40-4db4-87b8-1c3f3d7014b6.jpg')`,
          backgroundPosition: 'center 15%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,35,25,0.15)] via-[rgba(30,35,25,0.1)] to-[rgba(30,35,25,0.85)]" />
      <div className="flex-1" />
      <div className="relative z-10 container mx-auto px-4 pb-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight drop-shadow-lg text-white">
            Ваши преимущества – <br/>наш вклад в Победу
          </h1>
          <p className="text-lg md:text-xl mb-6 font-semibold drop-shadow-md text-white/90">
            Особые условия для защитников Отечества и их семей
          </p>
          <Button 
            size="lg" 
            className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-xl"
            onClick={onEnrollClick}
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;