
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Conócenos", path: "/conocenos" },
    { name: "Cursos", path: "/cursos" },
    { name: "Agendar Clase", path: "/agendar" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl text-ingenio-blue">
            INGENIO<span className="text-ingenio-green">ACADEMY</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-600 hover:text-ingenio-blue transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button className="btn-primary">Clase Gratis</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-ingenio-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-ingenio-blue py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="btn-primary w-full">Clase Gratis</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
