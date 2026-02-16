import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnrollClick: () => void;
}

const HeroSection = ({ onEnrollClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/0ef760dc-6cc5-49e2-9400-9dd830dad74c/files/13613e6c-bd40-4db4-87b8-1c3f3d7014b6.jpg')`,
          backgroundPosition: 'center 15%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,35,25,0.7)] via-[rgba(30,35,25,0.3)] to-[rgba(30,35,25,0.75)]" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-8 pb-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
          Ваши преимущества – <br/>наш вклад в Победу
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-semibold drop-shadow-md">
          Особые условия для защитников Отечества и их семей
        </p>
      </div>
      <div className="flex-1" />
      <div className="relative z-10 text-center pb-16">
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-xl"
          onClick={onEnrollClick}
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;