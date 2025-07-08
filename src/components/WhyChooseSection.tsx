import { Award, Shield, Users, Clock, MapPin, Handshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Productos de Calidad",
    description: "Alimentos, artículos de aseo y material de oficina con los más altos estándares."
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Operamos de forma clara y ética en todos nuestros procesos comerciales."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Escuchamos las necesidades reales de cada cliente con cercanía y profesionalismo."
  },
  {
    icon: Clock,
    title: "Entregas Oportunas",
    description: "Cumplimos con responsabilidad los tiempos acordados en cada pedido."
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Atendemos organismos públicos y clientes particulares en todo Chile."
  },
  {
    icon: Handshake,
    title: "Compromiso Garantizado",
    description: "Entregamos lo prometido, siendo tu socio estratégico confiable."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por Qué Elegir Peka SPA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos tu socio estratégico que responde con eficiencia, cercanía y calidad, 
            mejorando tu experiencia de compra con soluciones prácticas y confiables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;