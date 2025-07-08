import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Clock } from "lucide-react";

const QuienesSomos = () => {
  const valores = [
    {
      icon: Users,
      title: "Compromiso",
      description: "Nos comprometemos con nuestros clientes ofreciendo un servicio de calidad y confiable."
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la excelencia en cada producto y servicio que ofrecemos a nuestros clientes."
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Garantizamos la más alta calidad en todos nuestros productos y procesos."
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimos con los tiempos de entrega acordados para mantener la confianza de nuestros clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quiénes <span className="text-primary">Somos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce más sobre nuestra empresa, nuestra historia y nuestro compromiso con la excelencia
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Peka SPA nació con el objetivo de ser el socio estratégico más confiable en el sector de suministros 
                para empresas en todo Chile. Desde nuestros inicios, nos hemos enfocado en ofrecer productos de 
                alta calidad en tres categorías principales: alimentos, productos de aseo y artículos de escritorio.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Con años de experiencia en el mercado, hemos construido una sólida reputación basada en la 
                confianza, la calidad y el servicio excepcional. Nuestro equipo de profesionales trabaja 
                incansablemente para garantizar que cada cliente reciba exactamente lo que necesita, 
                cuando lo necesita.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoy en día, Peka SPA se ha consolidado como una empresa líder en su sector, con modernas 
                instalaciones de almacenamiento y un sistema de distribución eficiente que nos permite 
                atender a clientes en todo el territorio nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Los valores que nos guían en cada decisión y nos permiten ofrecer el mejor servicio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{valor.title}</h3>
                  <p className="text-muted-foreground">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;