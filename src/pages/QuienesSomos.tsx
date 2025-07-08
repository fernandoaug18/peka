import Header from "@/components/Header";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quiénes <span className="text-primary">Somos</span>
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary">👥 ¿Quiénes somos?</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En Peka SPA, nos dedicamos a la venta de alimentos, productos de aseo y artículos de 
                escritorio, entregando soluciones prácticas y confiables tanto a organismos públicos 
                como a clientes particulares en todo Chile. Nuestro compromiso es ser un socio 
                estratégico que responda con eficiencia, cercanía y calidad.
              </p>
              
              <div className="text-center">
                <Link to="/">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;