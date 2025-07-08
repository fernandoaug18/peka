import Header from "@/components/Header";
import { Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MisionVision = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Misión y <span className="text-primary">Visión</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Conoce nuestros propósitos y objetivos como empresa
          </p>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary">🌍 Misión</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brindar productos esenciales de primera necesidad —como alimentos, artículos de aseo 
                y material de oficina— con altos estándares de calidad, atención personalizada y 
                cumplimiento oportuno, mejorando así la experiencia de compra de nuestros clientes 
                del sector público y privado.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary">🌟 Visión</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser una empresa reconocida a nivel nacional por su excelencia en servicio, 
                confiabilidad y capacidad de respuesta, posicionándonos como líderes en el 
                suministro integral para instituciones y consumidores individuales.
              </p>
            </div>

            {/* Botón Volver */}
            <div className="text-center pt-8">
              <Link to="/">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MisionVision;