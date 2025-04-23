
import React from "react";
import CourseList from "@/components/courses/CourseList";

const Courses: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-ingenio-blue to-blue-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Cursos
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Explora nuestro catálogo de materias impartidas por estudiantes
            destacados. Cada curso está diseñado para ayudarte a superar tus
            desafíos académicos.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <CourseList />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Si necesitas ayuda con una materia que no aparece en nuestra lista,
            contáctanos. Haremos todo lo posible para encontrar un tutor
            adecuado para ti.
          </p>
          <a
            href="https://wa.me/584141234567"
            className="btn-primary inline-block"
          >
            Solicitar Curso Personalizado
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
