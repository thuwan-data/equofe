'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminDashboardHeader from '../../../components/AdminDashboardHeader';
import TeacherProfile from '../../../components/TeacherProfile';
import AddEditTeacher from '../../../components/AddEditTeacher';

interface Teacher {
  id: string;
  name: string;
  staffId: string;
  standard: string;
  subjects: string[];
  actions?: string;
}

export default function TeachersPage() {
  const [activeNavItem, setActiveNavItem] = useState('teachers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'Tiana Gosse',
      staffId: 'STM001',
      standard: 'Standard II, Standard IV',
      subjects: ['Physics 3PHY1', 'Physics 4PHY2', 'Physics 5PHY3']
    },
    {
      id: '2',
      name: 'Jordyn Calzoni',
      staffId: 'STM002',
      standard: 'Standard VII',
      subjects: ['English 7ENG1', 'English 7ENG2', 'English 7ENG3']
    },
    {
      id: '3',
      name: 'Lydia Bergson',
      staffId: 'STM003',
      standard: 'Standard II',
      subjects: ['Maths 2MTH1', 'Maths 2MTH2', 'Maths 2MTH3']
    },
    {
      id: '4',
      name: 'Zaire Baptista',
      staffId: 'STM004',
      standard: 'Standard IV, Standard V',
      subjects: ['Chemistry 4CHM1', 'Chemistry 4CHM2']
    },
    {
      id: '5',
      name: 'Emery Dias',
      staffId: 'STM005',
      standard: 'Standard II',
      subjects: ['Maths 2MTH1', 'Maths 2MTH2', 'Maths 2MTH3']
    },
    {
      id: '6',
      name: 'Lincoln Bergson',
      staffId: 'STM006',
      standard: 'Standard VII, Standard VIII',
      subjects: ['Social Science 7SCN1', 'Social Science 7SCN2']
    },
    {
      id: '7',
      name: 'Leo Curtis',
      staffId: 'STM007',
      standard: 'Standard II',
      subjects: ['Biology 2BIO1', 'Biology 2BIO2']
    },
    {
      id: '8',
      name: 'Ahmad Culhane',
      staffId: 'STM008',
      standard: 'Standard II, Standard III',
      subjects: ['Computer 2CMP1', 'Computer 3CMP2']
    },
    {
      id: '9',
      name: 'Justin Phat Mccann',
      staffId: 'STM009',
      standard: 'Standard II',
      subjects: ['Literature 2LIT1', 'Literature 2LIT2', 'Literature 2LIT3']
    },
    {
      id: '10',
      name: 'Milo Lucen',
      staffId: 'STM010',
      standard: 'Standard I, Standard II, Standard III',
      subjects: ['Physics 1PHY1', 'Physics 2PHY1', 'Physics 3PHY1']
    }
  ];

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTeacherClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowProfile(true);
  };

  const handleAddTeacher = () => {
    setSelectedTeacher(null);
    setShowAddForm(true);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setShowProfile(false);
    setShowAddForm(true);
  };

  const handleDeleteTeacher = (teacherId: string) => {
    console.log('Delete teacher:', teacherId);
    setShowProfile(false);
  };

  const handleSaveTeacher = (teacher: Teacher) => {
    console.log('Save teacher:', teacher);
    setShowAddForm(false);
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.staffId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      <AdminSidebar 
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
      />

      <main className="dashboard-main">
        <AdminDashboardHeader 
          userName="Admin"
          onSearch={handleSearch}
        />

        <section className="content-section">
          <div className="teachers-page-content">
            <div className="teachers-header">
              <h1 className="page-title">Teachers</h1>
              <div className="teachers-actions">
                <button className="filter-button">
                  Filters
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
                <button className="add-teacher-button" onClick={handleAddTeacher}>
                  + Add Teacher
                </button>
              </div>
            </div>

            <div className="teachers-table-container">
              <table className="teachers-table">
                <thead>
                  <tr>
                    <th>Teacher Name</th>
                    <th>Teacher ID</th>
                    <th>Classes Assigned</th>
                    <th>Subjects</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTeachers.map((teacher) => (
                    <tr key={teacher.id} onClick={() => handleTeacherClick(teacher)}>
                      <td>
                        <div className="teacher-info">
                          <div className="teacher-avatar">
                            <span>{teacher.name.charAt(0)}</span>
                          </div>
                          <span className="teacher-name">{teacher.name}</span>
                        </div>
                      </td>
                      <td className="staff-id">{teacher.staffId}</td>
                      <td className="standard">{teacher.standard}</td>
                      <td className="subjects">
                        {teacher.subjects.map((subject, index) => (
                          <span key={index} className="subject-tag">
                            {subject}
                            {index < teacher.subjects.length - 1 && ', '}
                          </span>
                        ))}
                      </td>
                      <td className="actions">
                        <button className="action-btn view-btn" title="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-btn edit-btn" title="Edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="action-btn delete-btn" title="Delete">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <span>Showing 1 to 10 of 123 results</span>
              <div className="pagination-controls">
                <button className="pagination-btn">&laquo;</button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">4</button>
                <button className="pagination-btn">&raquo;</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Teacher Profile Modal */}
      <TeacherProfile
        teacher={selectedTeacher}
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        onEdit={handleEditTeacher}
        onDelete={handleDeleteTeacher}
      />

      {/* Add/Edit Teacher Modal */}
      <AddEditTeacher
        teacher={selectedTeacher}
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onSave={handleSaveTeacher}
      />
    </div>
  );
}
