import { Button } from "@/components/ui/button";

interface MobileCTAProps {
  onClick: () => void;
}

const MobileCTA = ({ onClick }: MobileCTAProps) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-sm px-4 py-2 shadow-lg">
      <Button
        size="sm"
        className="w-full bg-white hover:bg-white/90 text-accent font-semibold text-base py-5"
        onClick={onClick}
      >
        Оставить заявку
      </Button>
    </div>
  );
};

export default MobileCTA;
