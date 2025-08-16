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
  { id: '1', number: 1, subject: 'Mathematics', code: '7MTH5', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '2', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '3', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '4', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '5', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' },
  { id: '6', number: 2, subject: 'Physics', code: '5PHY2', time: '08:00-09:30', date: '12th July 2024', year: '6', classType: 'Class List' }
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
          Filter
          <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2928)">
              <path d="M4.16675 17.5V11.6666" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.16675 8.33333V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8335 17.5V10" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8335 6.66667V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5002 17.5V13.3334" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5002 10V2.5" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.66675 11.6666H6.66675" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.3335 6.66663H13.3335" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0002 13.3334H20.0002" stroke="#288474" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1_2928">
                <rect width="20" height="20" fill="white" transform="translate(0.833496)"/>
              </clipPath>
            </defs>
          </svg>
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
                <span className={`subject-name ${cls.subject.toLowerCase() === 'physics' ? 'physics' : ''}`}>
                  {cls.subject}
                </span>
                <span className={`subject-code ${cls.subject.toLowerCase() === 'physics' ? 'physics' : ''}`}>
                  | {cls.code}
                </span>
              </div>
              <div className="class-meta">
                <span className="class-time">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_200)">
                      <path d="M10.1653 0C8.18747 0 6.25408 0.58649 4.60958 1.6853C2.96509 2.78412 1.68337 4.3459 0.926492 6.17317C0.169616 8.00043 -0.0284173 10.0111 0.357435 11.9509C0.743287 13.8907 1.69569 15.6725 3.09422 17.0711C4.49274 18.4696 6.27457 19.422 8.21439 19.8079C10.1542 20.1937 12.1649 19.9957 13.9921 19.2388C15.8194 18.4819 17.3812 17.2002 18.48 15.5557C19.5788 13.9112 20.1653 11.9778 20.1653 10C20.1624 7.34872 19.1079 4.80684 17.2332 2.9321C15.3584 1.05736 12.8166 0.00286757 10.1653 0ZM10.1653 18.3333C8.51711 18.3333 6.90595 17.8446 5.53554 16.9289C4.16513 16.0132 3.09702 14.7117 2.46629 13.189C1.83556 11.6663 1.67053 9.99076 1.99208 8.37425C2.31362 6.75774 3.10729 5.27288 4.27273 4.10744C5.43817 2.94201 6.92303 2.14833 8.53954 1.82679C10.156 1.50525 11.8316 1.67027 13.3543 2.301C14.877 2.93173 16.1785 3.99984 17.0942 5.37025C18.0099 6.74066 18.4986 8.35182 18.4986 10C18.4962 12.2094 17.6174 14.3276 16.0552 15.8899C14.4929 17.4522 12.3747 18.3309 10.1653 18.3333Z" fill="#828282"/>
                      <path d="M10.1651 5C9.94406 5 9.7321 5.0878 9.57582 5.24408C9.41954 5.40036 9.33174 5.61232 9.33174 5.83333V9.4375L6.52258 11.1975C6.33471 11.3149 6.20117 11.502 6.15131 11.7179C6.10146 11.9337 6.13938 12.1605 6.25674 12.3483C6.3741 12.5362 6.56128 12.6697 6.7771 12.7196C6.99293 12.7694 7.21971 12.7315 7.40758 12.6142L10.6076 10.6142C10.7285 10.5384 10.8279 10.4329 10.8963 10.3077C10.9648 10.1825 10.9999 10.0418 10.9984 9.89917V5.83333C10.9984 5.61232 10.9106 5.40036 10.7543 5.24408C10.5981 5.0878 10.3861 5 10.1651 5Z" fill="#828282"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_200">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  {cls.time}
                </span>
                <span className="class-date">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_205)">
                      <path d="M7.23796 10H5.57129C4.65212 10 3.90462 10.7475 3.90462 11.6667V13.3333C3.90462 14.2525 4.65212 15 5.57129 15H7.23796C8.15712 15 8.90462 14.2525 8.90462 13.3333V11.6667C8.90462 10.7475 8.15712 10 7.23796 10ZM5.57129 13.3333V11.6667H7.23796V13.3333H5.57129ZM16.4046 1.66667H15.5713V0.833333C15.5713 0.373333 15.1988 0 14.738 0C14.2771 0 13.9046 0.373333 13.9046 0.833333V1.66667H7.23796V0.833333C7.23796 0.373333 6.86546 0 6.40462 0C5.94379 0 5.57129 0.373333 5.57129 0.833333V1.66667H4.73796C2.44046 1.66667 0.571289 3.53583 0.571289 5.83333V15.8333C0.571289 18.1308 2.44046 20 4.73796 20H16.4046C18.7021 20 20.5713 18.1308 20.5713 15.8333V5.83333C20.5713 3.53583 18.7021 1.66667 16.4046 1.66667ZM4.73796 3.33333H16.4046C17.783 3.33333 18.9046 4.455 18.9046 5.83333V6.66667H2.23796V5.83333C2.23796 4.455 3.35962 3.33333 4.73796 3.33333ZM16.4046 18.3333H4.73796C3.35962 18.3333 2.23796 17.2117 2.23796 15.8333V8.33333H18.9046V15.8333C18.9046 17.2117 17.783 18.3333 16.4046 18.3333Z" fill="#828282"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_205">
                        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  {cls.date}
                </span>
                <span className="class-year">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.3569 13.4763C11.7318 12.8512 10.884 12.5 9.99992 12.5H4.16659C3.28253 12.5 2.43468 12.8512 1.80956 13.4763C1.18444 14.1014 0.833252 14.9493 0.833252 15.8333V17.5" stroke="#828282" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.08333 9.16667C8.92428 9.16667 10.4167 7.67428 10.4167 5.83333C10.4167 3.99238 8.92428 2.5 7.08333 2.5C5.24238 2.5 3.75 3.99238 3.75 5.83333C3.75 7.67428 5.24238 9.16667 7.08333 9.16667Z" stroke="#828282" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5151 5.91544C14.6562 5.51432 14.9348 5.17609 15.3013 4.96064C15.6679 4.74519 16.0989 4.66644 16.518 4.73832C16.9371 4.81021 17.3172 5.02809 17.5911 5.35339C17.8649 5.67869 18.0148 6.0904 18.0142 6.51562C18.0142 7.71597 16.2136 8.31614 16.2136 8.31614" stroke="#828282" strokeWidth="1.20035" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.2617 10.7168H16.2677" stroke="#828282" strokeWidth="1.20035" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {cls.year}
                </span>
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
