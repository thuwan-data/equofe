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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2903)">
              <path d="M8 12H6C4.897 12 4 12.897 4 14V16C4 17.103 4.897 18 6 18H8C9.103 18 10 17.103 10 16V14C10 12.897 9.103 12 8 12ZM6 16V14H8V16H6ZM19 2H18V1C18 0.448 17.553 0 17 0C16.447 0 16 0.448 16 1V2H8V1C8 0.448 7.553 0 7 0C6.447 0 6 0.448 6 1V2H5C2.243 2 0 4.243 0 7V19C0 21.757 2.243 24 5 24H19C21.757 24 24 21.757 24 19V7C24 4.243 21.757 2 19 2ZM5 4H19C20.654 4 22 5.346 22 7V8H2V7C2 5.346 3.346 4 5 4ZM19 22H5C3.346 22 2 20.654 2 19V10H22V19C22 20.654 20.654 22 19 22Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_1_2903">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="calendar">
        <div className="calendar-header">
          {weekdays.map((weekday) => (
            <div key={weekday} className="weekday">
              {weekday}
            </div>
          ))}
        </div>

        <div className="calendar-days-container">
          <div className="calendar-row">
            {[1, 2, 3, 4, 5].map((day) => (
              <div
                key={day}
                className={`calendar-day ${day === 12 ? 'calendar-day-today' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
            <div className="calendar-day weekend">6</div>
            <div className="calendar-day weekend">7</div>
          </div>

          <div className="calendar-row">
            {[8, 9, 10, 11].map((day) => (
              <div
                key={day}
                className="calendar-day"
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
            <div className="calendar-day calendar-day-today">12</div>
            <div className="calendar-day weekend">13</div>
            <div className="calendar-day weekend">14</div>
          </div>

          <div className="calendar-row">
            {[15, 16, 17, 18, 19].map((day) => (
              <div
                key={day}
                className="calendar-day"
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
            <div className="calendar-day weekend">20</div>
            <div className="calendar-day weekend">21</div>
          </div>

          <div className="calendar-row">
            {[22, 23, 24, 25, 26].map((day) => (
              <div
                key={day}
                className="calendar-day"
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
            <div className="calendar-day weekend">27</div>
            <div className="calendar-day weekend">28</div>
          </div>

          <div className="calendar-row">
            {[29, 30, 31].map((day) => (
              <div
                key={day}
                className="calendar-day"
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
<<<<<<< HEAD
=======
            <div className="calendar-day weekend">1</div>
            <div className="calendar-day weekend">2</div>
            <div className="calendar-day weekend">3</div>
            <div className="calendar-day weekend">4</div>
>>>>>>> refs/remotes/origin/main
          </div>
        </div>
      </div>
    </div>
  );
}
