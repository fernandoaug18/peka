import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Lightbulb, Globe } from "lucide-react";

const MisionVision = () => {
  const objetivos = [
    {
      icon: Globe,
      title: "Expansión Nacional",
      description: "Consolidar nuestra presencia en todo el territorio chileno, llegando a más empresas y regiones."
    },
    {
      icon: Lightbulb,
      title: "Innovación Continua",
      description: "Implementar nuevas tecnologías y procesos para mejorar continuamente nuestros servicios."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Misión y <span className="text-primary">Visión</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestro propósito y hacia dónde nos dirigimos como empresa
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Misión */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Nuestra Misión</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Ser el socio estratégico más confiable en suministros para empresas en Chile, 
                  ofreciendo productos de alta calidad en alimentos, aseo y escritorio, con un 
                  servicio excepcional, entregas puntuales y atención personalizada que impulse 
                  el éxito de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Nuestra Visión</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Consolidarnos como la empresa líder en suministros corporativos en Chile, 
                  reconocidos por nuestra excelencia operacional, innovación en servicios 
                  y el impacto positivo que generamos en el crecimiento y eficiencia de 
                  nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivos Estratégicos */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Objetivos Estratégicos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Las metas que nos guían hacia el cumplimiento de nuestra visión
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {objetivos.map((objetivo, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <objetivo.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{objetivo.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{objetivo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Compromiso</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              En Peka SPA, nos comprometemos a mantener los más altos estándares de calidad y servicio. 
              Trabajamos día a día para superar las expectativas de nuestros clientes, contribuyendo 
              al éxito de sus operaciones y al crecimiento sostenible de sus negocios.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creemos que el éxito de nuestros clientes es nuestro éxito, y por eso ponemos todo 
              nuestro empeño en ser el mejor socio estratégico que puedan tener.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MisionVision;