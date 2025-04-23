
import React, { useState } from "react";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlotProps {
  time: string;
  available: boolean;
  onClick: () => void;
  selected: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
  time,
  available,
  onClick,
  selected,
}) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full",
        !available && "opacity-50 cursor-not-allowed",
        selected && "bg-ingenio-blue text-white"
      )}
      onClick={onClick}
      disabled={!available}
    >
      {time}
    </Button>
  );
};

interface BookingCalendarProps {
  onSelectDateTime: (date: Date | undefined, time: string | undefined) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  onSelectDateTime,
}) => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  // Ejemplo de horarios disponibles
  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: false },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
    { time: "6:00 PM", available: false },
    { time: "7:00 PM", available: true },
    { time: "8:00 PM", available: true },
  ];

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedTime(undefined);
    onSelectDateTime(newDate, undefined);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    onSelectDateTime(date, time);
  };

  // Deshabilitar fechas pasadas y fines de semana para este ejemplo
  const disabledDays = (date: Date) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const day = date.getDay();
    return date < now || day === 0 || day === 6; // 0 es domingo, 6 es sábado
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-4 border-r border-b md:border-b-0">
          <h3 className="font-medium text-lg mb-3">Selecciona una fecha</h3>
          <CalendarUI
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            disabled={disabledDays}
            className="rounded-md border"
          />
        </div>

        <div className="p-4">
          <h3 className="font-medium text-lg mb-3">Selecciona un horario</h3>
          {!date ? (
            <p className="text-gray-500">
              Por favor, selecciona una fecha primero.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot, idx) => (
                <TimeSlot
                  key={idx}
                  time={slot.time}
                  available={slot.available}
                  selected={selectedTime === slot.time}
                  onClick={() => handleTimeSelection(slot.time)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50">
        <p className="font-medium">
          {date &&
            selectedTime &&
            `Seleccionado: ${date.toLocaleDateString()} a las ${selectedTime}`}
        </p>
      </div>
    </div>
  );
};

export default BookingCalendar;
