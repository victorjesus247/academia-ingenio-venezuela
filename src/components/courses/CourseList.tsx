
import React, { useState, useMemo } from "react";
import CourseCard, { CourseProps } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Data de cursos simulada
const courses: CourseProps[] = [
  {
    id: 1,
    title: "Cálculo I - Límites y Derivadas",
    description:
      "Domina los fundamentos del cálculo diferencial: límites, continuidad y aplicaciones de derivadas en problemas reales.",
    level: "Básico",
    instructor: "Alejandro Torres",
    price: 5,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    category: "Matemáticas",
  },
  {
    id: 2,
    title: "Cálculo II - Integrales",
    description:
      "Aprende a resolver integrales definidas e indefinidas, con aplicaciones en física y geometría.",
    level: "Intermedio",
    instructor: "María Gómez",
    price: 6,
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
    category: "Matemáticas",
  },
  {
    id: 3,
    title: "Física I - Mecánica",
    description:
      "Comprende las leyes fundamentales del movimiento, fuerza y energía para resolver problemas de mecánica clásica.",
    level: "Básico",
    instructor: "Daniel Ramírez",
    price: 5,
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80",
    category: "Física",
  },
  {
    id: 4,
    title: "Programación - Fundamentos",
    description:
      "Introducción a la lógica de programación, estructuras de datos y algoritmos básicos con Python.",
    level: "Básico",
    instructor: "Gabriela Méndez",
    price: 4,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Programación",
  },
  {
    id: 5,
    title: "Resistencia de Materiales",
    description:
      "Estudio de las propiedades mecánicas de los materiales y su comportamiento bajo cargas.",
    level: "Avanzado",
    instructor: "Carlos Martínez",
    price: 7,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    category: "Ingeniería Civil",
  },
  {
    id: 6,
    title: "Circuitos Eléctricos",
    description:
      "Análisis y diseño de circuitos DC y AC, leyes de Kirchhoff y transformaciones.",
    level: "Intermedio",
    instructor: "Valentina Castro",
    price: 6,
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80",
    category: "Ingeniería Eléctrica",
  },
];

// Categorías únicas extraídas de los cursos
const categories = [...new Set(courses.map((course) => course.category))];
const levels = ["Básico", "Intermedio", "Avanzado"];

const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || course.category === selectedCategory;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div>
      <div className="mb-8">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Buscar cursos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            className={!selectedCategory ? "bg-ingenio-blue" : ""}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-ingenio-blue" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <Button
            size="sm"
            variant={!selectedLevel ? "default" : "outline"}
            className={!selectedLevel ? "bg-ingenio-green" : ""}
            onClick={() => setSelectedLevel(null)}
          >
            Todos los niveles
          </Button>
          {levels.map((level) => (
            <Button
              key={level}
              size="sm"
              variant={selectedLevel === level ? "default" : "outline"}
              className={selectedLevel === level ? "bg-ingenio-green" : ""}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">
            No se encontraron cursos con estos criterios.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseList;
