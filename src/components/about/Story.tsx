
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Story: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-ingenio-blue/10 rounded-lg -rotate-6"></div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Nuestra historia"
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nuestra Historia
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Ingenio Academy nació en 2022 cuando un grupo de estudiantes de
                ingeniería decidimos unir fuerzas para ayudar a otros compañeros
                que enfrentaban dificultades en materias fundamentales.
              </p>
              <p>
                Todo comenzó con sesiones informales de estudio en la biblioteca
                universitaria. Nos dimos cuenta de que teníamos la capacidad de
                explicar conceptos complejos de manera sencilla, y que muchos
                estudiantes necesitaban ese apoyo adicional.
              </p>
              <p>
                Lo que comenzó como un pequeño grupo de estudio se transformó en
                una academia estructurada cuando vimos el impacto positivo que
                estábamos teniendo en las calificaciones y la confianza de
                nuestros compañeros.
              </p>
              <p>
                Hoy, Ingenio Academy se ha convertido en un espacio donde
                estudiantes ayudan a estudiantes, combinando la experiencia
                académica con la comprensión de los desafíos particulares que
                enfrentamos en nuestras carreras.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/cursos">
                <Button className="btn-primary">Conoce nuestros cursos</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
