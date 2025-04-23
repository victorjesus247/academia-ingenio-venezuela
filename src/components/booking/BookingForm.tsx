
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookingCalendar from "./Calendar";
import { useToast } from "@/hooks/use-toast";

// Datos simulados de cursos
const courses = [
  { id: "1", title: "Cálculo I - Límites y Derivadas" },
  { id: "2", title: "Cálculo II - Integrales" },
  { id: "3", title: "Física I - Mecánica" },
  { id: "4", title: "Programación - Fundamentos" },
  { id: "5", title: "Resistencia de Materiales" },
  { id: "6", title: "Circuitos Eléctricos" },
];

const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: searchParams.get("course") || "",
    notes: "",
    date: undefined as Date | undefined,
    time: undefined as string | undefined,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (searchParams.get("course")) {
      setFormData((prev) => ({
        ...prev,
        course: searchParams.get("course") || "",
      }));
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, course: value }));
  };

  const handleDateTimeSelect = (date: Date | undefined, time: string | undefined) => {
    setFormData((prev) => ({ ...prev, date, time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar el formulario
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Simular envío de datos al servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Reserva exitosa!",
        description: "Tu clase ha sido agendada correctamente.",
      });
      
      // Reiniciar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        notes: "",
        date: undefined,
        time: undefined,
      });
    } catch (error) {
      toast({
        title: "Error al agendar",
        description: "Hubo un problema al procesar tu solicitud. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre completo*</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Correo electrónico*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Teléfono / WhatsApp*</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="course">Curso/Materia*</Label>
            <Select
              value={formData.course}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un curso" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Fecha y Hora*</h3>
            <BookingCalendar onSelectDateTime={handleDateTimeSelect} />
          </div>
          
          <div className="mt-6">
            <Label htmlFor="notes">Notas adicionales (opcional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Indica cualquier detalle importante sobre tus necesidades de aprendizaje o temas específicos que quieras abordar."
              className="h-24"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Procesando..." : "Confirmar Reserva"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
