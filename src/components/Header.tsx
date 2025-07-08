import pekaLogo from "/lovable-uploads/3b9d0156-ef83-4a68-aeef-14fed12c1086.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
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
              href="mailto:contacto@pka.cl" 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-primary hover:text-primary/80 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/quienes-somos" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link 
                to="/mision-vision" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Misión y Visión
              </Link>
              <a 
                href="mailto:contacto@pka.cl" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;