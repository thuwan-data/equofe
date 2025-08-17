<<<<<<< HEAD
import StudentsPage from '../students';

export default StudentsPage;
=======
'use client';

import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminDashboardHeader from '../../../components/AdminDashboardHeader';
import StudentProfile from '../../../components/StudentProfile';
import AddEditStudent from '../../../components/AddEditStudent';

interface Student {
  id: string;
  name: string;
  studentId: string;
  class: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  gender?: string;
  yearGroup?: string;
  nationality?: string;
  inclusion?: string;
}

export default function StudentsPage() {
  const [activeNavItem, setActiveNavItem] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const students: Student[] = [
    {
      id: '1',
      name: 'Emma Watson',
      studentId: 'STU001',
      class: 'Year 7',
      dateOfBirth: '15/03/2010',
      phoneNumber: '+1 555 123 4567',
      address: '123 Main Street, City, State',
      gender: 'Female',
      yearGroup: 'Year 7',
      nationality: 'British',
      inclusion: 'None'
    },
    {
      id: '2',
      name: 'James Smith',
      studentId: 'STU002',
      class: 'Year 8',
      dateOfBirth: '22/07/2009',
      phoneNumber: '+1 555 234 5678',
      address: '456 Oak Avenue, City, State',
      gender: 'Male',
      yearGroup: 'Year 8',
      nationality: 'American',
      inclusion: 'Special Needs'
    },
    {
      id: '3',
      name: 'Sophia Johnson',
      studentId: 'STU003',
      class: 'Year 6',
      dateOfBirth: '10/11/2011',
      phoneNumber: '+1 555 345 6789',
      address: '789 Pine Road, City, State',
      gender: 'Female',
      yearGroup: 'Year 6',
      nationality: 'Canadian',
      inclusion: 'None'
    },
    {
      id: '4',
      name: 'Michael Brown',
      studentId: 'STU004',
      class: 'Year 9',
      dateOfBirth: '05/01/2008',
      phoneNumber: '+1 555 456 7890',
      address: '321 Elm Street, City, State',
      gender: 'Male',
      yearGroup: 'Year 9',
      nationality: 'American',
      inclusion: 'Gifted Program'
    },
    {
      id: '5',
      name: 'Isabella Davis',
      studentId: 'STU005',
      class: 'Year 7',
      dateOfBirth: '18/09/2010',
      phoneNumber: '+1 555 567 8901',
      address: '654 Maple Lane, City, State',
      gender: 'Female',
      yearGroup: 'Year 7',
      nationality: 'Australian',
      inclusion: 'None'
    },
    {
      id: '6',
      name: 'William Wilson',
      studentId: 'STU006',
      class: 'Year 8',
      dateOfBirth: '30/12/2009',
      phoneNumber: '+1 555 678 9012',
      address: '987 Cedar Drive, City, State',
      gender: 'Male',
      yearGroup: 'Year 8',
      nationality: 'British',
      inclusion: 'ESL Support'
    },
    {
      id: '7',
      name: 'Olivia Taylor',
      studentId: 'STU007',
      class: 'Year 6',
      dateOfBirth: '14/04/2011',
      phoneNumber: '+1 555 789 0123',
      address: '147 Birch Street, City, State',
      gender: 'Female',
      yearGroup: 'Year 6',
      nationality: 'American',
      inclusion: 'None'
    },
    {
      id: '8',
      name: 'Benjamin Martinez',
      studentId: 'STU008',
      class: 'Year 9',
      dateOfBirth: '27/06/2008',
      phoneNumber: '+1 555 890 1234',
      address: '258 Spruce Avenue, City, State',
      gender: 'Male',
      yearGroup: 'Year 9',
      nationality: 'Mexican',
      inclusion: 'Special Needs'
    },
    {
      id: '9',
      name: 'Ava Anderson',
      studentId: 'STU009',
      class: 'Year 7',
      dateOfBirth: '03/08/2010',
      phoneNumber: '+1 555 901 2345',
      address: '369 Willow Way, City, State',
      gender: 'Female',
      yearGroup: 'Year 7',
      nationality: 'American',
      inclusion: 'Gifted Program'
    },
    {
      id: '10',
      name: 'Alexander Thompson',
      studentId: 'STU010',
      class: 'Year 8',
      dateOfBirth: '11/02/2009',
      phoneNumber: '+1 555 012 3456',
      address: '741 Aspen Road, City, State',
      gender: 'Male',
      yearGroup: 'Year 8',
      nationality: 'Canadian',
      inclusion: 'None'
    }
  ];

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setShowProfile(true);
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setShowAddForm(true);
  };

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student);
    setShowProfile(false);
    setShowAddForm(true);
  };

  const handleDeleteStudent = (studentId: string) => {
    console.log('Delete student:', studentId);
    setShowProfile(false);
  };

  const handleSaveStudent = (student: Student) => {
    console.log('Save student:', student);
    setShowAddForm(false);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.class.toLowerCase().includes(searchQuery.toLowerCase())
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
          <div className="students-page-content">
            <div className="students-header">
              <h1 className="page-title">Students</h1>
              <div className="students-actions">
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
                <button className="add-student-button" onClick={handleAddStudent}>
                  + Add Student
                </button>
              </div>
            </div>

            <div className="students-table-container">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>Class</th>
                    <th>DOB</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} onClick={() => handleStudentClick(student)}>
                      <td>
                        <div className="student-info">
                          <div className="student-avatar">
                            <span>{student.name.charAt(0)}</span>
                          </div>
                          <span className="student-name">{student.name}</span>
                        </div>
                      </td>
                      <td className="student-id">{student.studentId}</td>
                      <td className="class">{student.class}</td>
                      <td className="dob">{student.dateOfBirth}</td>
                      <td className="phone">{student.phoneNumber}</td>
                      <td className="address">{student.address}</td>
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
              <span>Showing 1 to 10 of 167 results</span>
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

      {/* Student Profile Modal */}
      <StudentProfile
        student={selectedStudent}
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />

      {/* Add/Edit Student Modal */}
      <AddEditStudent
        student={selectedStudent}
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onSave={handleSaveStudent}
      />
    </div>
  );
}
>>>>>>> refs/remotes/origin/main
