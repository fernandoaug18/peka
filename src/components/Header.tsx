import pekaLogo from "@/assets/peka-logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={pekaLogo} 
              alt="Peka SPA Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#inicio" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#quienes-somos" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Quiénes Somos
            </a>
            <a 
              href="#mision-vision" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Misión y Visión
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;