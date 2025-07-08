import boxesImage from "/lovable-uploads/2e2cd2c1-ce76-44bb-8005-edcfb46c5ffc.png";
import palletImage from "/lovable-uploads/967bbcb2-8c15-48e3-b652-145f81f3d3ee.png";
import warehouseExternalImage from "/lovable-uploads/ffe3ea01-aac2-4e02-a442-2dcf2fd4e6e4.png";
import truckImage from "/lovable-uploads/9c7f7095-d452-4346-b86a-bc781046bf4d.png";
import storageAreaImage from "/lovable-uploads/3b534fe7-0723-42f6-92e5-d05e90879369.png";

const facilities = [
  {
    image: boxesImage,
    title: "Gestión de Inventarios",
    description: "Organización eficiente de productos con sistemas de etiquetado y control de stock para garantizar disponibilidad inmediata."
  },
  {
    image: palletImage,
    title: "Almacenamiento en Pallets",
    description: "Sistemas de paletizado que optimizan el espacio y facilitan la carga y descarga de mercaderías de gran volumen."
  },
  {
    image: warehouseExternalImage,
    title: "Instalaciones Modernas",
    description: "Bodegas de última generación con infraestructura diseñada para el manejo eficiente de productos alimentarios y de aseo."
  },
  {
    image: truckImage,
    title: "Distribución Refrigerada",
    description: "Flota de vehículos con sistemas de refrigeración para mantener la cadena de frío en productos que lo requieran."
  },
  {
    image: storageAreaImage,
    title: "Áreas de Almacenamiento",
    description: "Espacios especializados con iluminación LED y climatización controlada para preservar la calidad de los productos."
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
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
        
        {/* Primera fila: 3 imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {facilities.slice(0, 3).map((facility, index) => (
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
        
        {/* Segunda fila: 2 imágenes centradas */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {facilities.slice(3, 5).map((facility, index) => (
              <div key={index + 3} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
      </div>
    </section>
  );
};

export default FacilitiesSection;