import pekaLogo from "@/assets/peka-logo.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={pekaLogo} 
              alt="Peka SPA Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a{" "}
            <span className="text-primary">Peka SPA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu socio estratégico en suministros. Ofrecemos alimentos, productos de 
            aseo y artículos de escritorio con calidad, eficiencia y atención 
            personalizada para todo Chile.
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg">
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;