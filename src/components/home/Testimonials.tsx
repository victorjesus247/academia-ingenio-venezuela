
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  image,
}) => {
  return (
    <Card className="border-0 shadow-sm bg-white">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <blockquote className="text-gray-700 italic mb-6">{quote}</blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    quote:
      "Las clases de Cálculo II me salvaron el semestre. Mi profesor explicaba muy rápido y aquí pude aclarar todas mis dudas.",
    name: "Carlos Mendoza",
    role: "Estudiante de Ing. Eléctrica",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "Gracias a Ingenio Academy pude aprobar Física II con excelente calificación después de haberla reprobado dos veces.",
    name: "María González",
    role: "Estudiante de Ing. Química",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "Lo que más me gusta es que los tutores son estudiantes como yo y explican todo de manera sencilla y clara.",
    name: "Pedro Ramírez",
    role: "Estudiante de Ing. Civil",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-gray-600">
            Estas son algunas historias de éxito de quienes confiaron en nuestra
            metodología de enseñanza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
