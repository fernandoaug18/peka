import pekaLogo from "/lovable-uploads/3b9d0156-ef83-4a68-aeef-14fed12c1086.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 min-h-[80vh] flex items-center">
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
            <span>Peka SPA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu socio estratégico en suministros. Ofrecemos alimentos, productos de 
            aseo y artículos de escritorio con calidad, eficiencia y atención 
            personalizada para todo Chile.
          </p>
          
          <Button 
            size="lg" 
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = 'mailto:contacto@pka.cl'}
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;