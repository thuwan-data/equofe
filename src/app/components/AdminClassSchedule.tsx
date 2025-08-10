'use client';

import { useState } from 'react';

interface ClassScheduleItem {
  id: string;
  number: number;
  subject: string;
  code: string;
  time: string;
  date: string;
  year: string;
  classType: string;
}

interface AdminClassScheduleProps {
  classes?: ClassScheduleItem[];
  onFilterClick?: () => void;
  onClassClick?: (classId: string) => void;
  className?: string;
}

const defaultClasses: ClassScheduleItem[] = [
  { id: '1', number: 1, subject: 'Mathematics', code: 'MTH18', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '2', number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '3', number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '4', number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '5', number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '6', number: 2, subject: 'Physics', code: 'PHY12', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' }
];

export default function AdminClassSchedule({ 
  classes = defaultClasses,
  onFilterClick,
  onClassClick,
  className = '' 
}: AdminClassScheduleProps) {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
    if (onFilterClick) {
      onFilterClick();
    }
  };

  const handleClassClick = (classId: string) => {
    if (onClassClick) {
      onClassClick(classId);
    }
  };

  return (
    <div className={`content-card classes-card ${className}`}>
      <div className="card-header">
        <h2 className="card-title">Today's Classes Schedule</h2>
        <button 
          className="filter-button"
          onClick={handleFilterClick}
        >
          Filter ⚙️
        </button>
      </div>
      
      <div className="classes-list">
        {classes.map((cls) => (
          <div 
            key={cls.id} 
            className="class-item"
            onClick={() => handleClassClick(cls.id)}
          >
            <div className="class-info">
              <div className="class-header">
                <span className="lesson-number">Lesson Number {cls.number}</span>
              </div>
              <div className="class-details">
                <span className="subject-name">{cls.subject}</span>
                <span className="subject-code">| {cls.code}</span>
              </div>
              <div className="class-meta">
                <span className="class-time">⏰ {cls.time}</span>
                <span className="class-date">📅 {cls.date}</span>
                <span className="class-year">🎓 {cls.year}</span>
                <button className="class-list-button">{cls.classType}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filterOpen && (
        <div className="filter-panel">
          <p>Filter options would go here</p>
        </div>
      )}
    </div>
  );
}
