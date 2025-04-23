
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface CourseProps {
  id: number;
  title: string;
  description: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  instructor: string;
  price: number;
  image: string;
  category: string;
}

const CourseCard: React.FC<{ course: CourseProps }> = ({ course }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico":
        return "bg-green-100 text-green-700";
      case "Intermedio":
        return "bg-blue-100 text-blue-700";
      case "Avanzado":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-sm card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-3">
          <Badge className={`${getLevelColor(course.level)}`}>
            {course.level}
          </Badge>
          <span className="text-lg font-semibold text-ingenio-green">
            ${course.price}/hora
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Profesor: {course.instructor}
        </p>
        <p className="text-gray-600 line-clamp-3">{course.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/agendar?course=${course.id}`} className="w-full">
          <Button className="btn-primary w-full">Agendar Clase</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
