import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onEnrollClick: () => void;
}

const Header = ({ onEnrollClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/e1306666-0b52-4996-b9a1-6d44a4b51ef8.png" 
              alt="ГОСАВТОШКОЛА" 
              className="h-12"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-accent" />
              <div>
                <div>Пн-Пт: 10:00-18:30</div>
                <div className="text-xs text-gray-300">Обед: 13:30-14:00</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-accent" />
              <a href="tel:+79789937015" className="hover:text-accent transition-colors font-semibold text-lg">
                +7 (978) 993 70 15
              </a>
            </div>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              onClick={onEnrollClick}
            >
              ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ
            </Button>
          </div>
        </div>
        
        <nav className="flex items-center gap-8 py-4 text-white overflow-x-auto">
          <a href="https://автошкола92.рф/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
            Главная
          </a>
          <a href="https://автошкола92.рф/o-gosavtoshkole/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
            О ГОСавтошколе
          </a>
          <a href="https://автошкола92.рф/aktsii/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
            Спецпредложения
          </a>
          <a href="https://автошкола92.рф/raspisanie/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
            Расписание
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
