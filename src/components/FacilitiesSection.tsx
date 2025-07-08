import warehouseImage from "/lovable-uploads/bdfabdd1-8229-4038-a3ab-13340a976205.png";
import transportImage from "/lovable-uploads/61505c94-9ef6-4946-86d8-2a4911c09dc3.png";
import distributionImage from "/lovable-uploads/32c6ff8f-93aa-4247-b72a-0e9dd01dc501.png";

const facilities = [
  {
    image: warehouseImage,
    title: "Instalaciones de Almacenamiento",
    description: "Modernas bodegas con tecnología de última generación para garantizar la conservación óptima de nuestros productos."
  },
  {
    image: transportImage,
    title: "Transporte y Distribución",
    description: "Flota de vehículos modernos y sistema logístico eficiente para entregas puntuales en todo Chile."
  },
  {
    image: distributionImage,
    title: "Centro de Distribución",
    description: "Instalaciones modernas con tecnología de punta para el manejo eficiente de inventarios y despacho de pedidos."
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestras modernas instalaciones de almacenamiento y distribución 
            que nos permiten brindarte el mejor servicio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;