'use client';

import { useState } from 'react';

interface CalendarDay {
  day: number;
  isToday: boolean;
  hasEvent?: boolean;
}

interface AdminCalendarProps {
  currentMonth?: string;
  currentYear?: number;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

export default function AdminCalendar({
  currentMonth = 'July',
  currentYear = 2024,
  selectedDate,
  onDateSelect,
  className = ''
}: AdminCalendarProps) {
  const [viewDate, setViewDate] = useState(new Date());

  const calendarDays: CalendarDay[] = [
    { day: 1, isToday: false }, { day: 2, isToday: false }, { day: 3, isToday: false }, 
    { day: 4, isToday: false }, { day: 5, isToday: false }, { day: 6, isToday: false }, 
    { day: 7, isToday: false }, { day: 8, isToday: false }, { day: 9, isToday: false }, 
    { day: 10, isToday: false }, { day: 11, isToday: false }, { day: 12, isToday: true }, 
    { day: 13, isToday: false }, { day: 14, isToday: false }, { day: 15, isToday: false }, 
    { day: 16, isToday: false }, { day: 17, isToday: false }, { day: 18, isToday: false }, 
    { day: 19, isToday: false }, { day: 20, isToday: false }, { day: 21, isToday: false }, 
    { day: 22, isToday: false }, { day: 23, isToday: false }, { day: 24, isToday: false }, 
    { day: 25, isToday: false }, { day: 26, isToday: false }, { day: 27, isToday: false }, 
    { day: 28, isToday: false }, { day: 29, isToday: false }, { day: 30, isToday: false }, 
    { day: 31, isToday: false }
  ];

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, 6, day); // July = month 6 (0-indexed)
    if (onDateSelect) {
      onDateSelect(newDate);
    }
  };

  const handleCalendarAction = () => {
    console.log('Calendar action clicked');
  };

  return (
    <div className={`content-card calendar-card ${className}`}>
      <div className="card-header">
        <h3 className="card-title">School Calendar</h3>
        <button 
          className="calendar-button"
          onClick={handleCalendarAction}
        >
          📅
        </button>
      </div>
      
      <div className="calendar">
        <div className="calendar-navigation">
          <button 
            className="nav-button"
            onClick={() => console.log('Previous month')}
          >
            ‹
          </button>
          <span className="calendar-month-year">
            {currentMonth} {currentYear}
          </span>
          <button 
            className="nav-button"
            onClick={() => console.log('Next month')}
          >
            ›
          </button>
        </div>
        
        <div className="calendar-header">
          {weekdays.map((weekday) => (
            <div key={weekday} className="weekday">
              {weekday}
            </div>
          ))}
        </div>
        
        <div className="calendar-grid">
          {calendarDays.map((day, index) => (
            <div 
              key={index} 
              className={`calendar-day ${day.isToday ? 'calendar-day-today' : ''} ${
                day.hasEvent ? 'calendar-day-event' : ''
              }`}
              onClick={() => handleDateClick(day.day)}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
