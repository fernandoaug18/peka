import pekaLogo from "/lovable-uploads/3b9d0156-ef83-4a68-aeef-14fed12c1086.png";
import { Link } from "react-router-dom";

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
            <Link 
              to="/" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link 
              to="/quienes-somos" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              to="/mision-vision" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Misión y Visión
            </Link>
            <a 
              href="#contacto" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;