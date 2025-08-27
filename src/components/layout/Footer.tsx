
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-14 pb-10 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-heading font-bold text-xl text-ingenio-blue">
                INGENIO<span className="text-ingenio-green">ACADEMY</span>
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">
              Academia creada por estudiantes, para estudiantes. Aprendizaje colaborativo
              para superar los desafíos académicos en ingeniería.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/raiz.cuadrada_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ingenio-darkgray hover:text-ingenio-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ingenio-darkgray hover:text-ingenio-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/conocenos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Conócenos
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  to="/agendar"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Agendar Clase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Cursos Populares</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Cálculo I, II y III
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Física I y II
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Programación
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  Resistencia de Materiales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-ingenio-blue" />
                <a
                  href="mailto:contacto@ingenioacademy.com"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  contacto@ingenioacademy.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-ingenio-blue" />
                <a
                  href="https://wa.me/584249029639"
                  className="text-gray-600 hover:text-ingenio-blue transition-colors"
                >
                  +58 4249029639 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Ingenio Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
