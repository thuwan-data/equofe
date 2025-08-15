'use client';

import { useState } from 'react';

interface AdminDashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function AdminDashboardHeader({ 
  userName = 'Admin',
  userAvatar,
  onSearch,
  className = '' 
}: AdminDashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleUserProfileClick = () => {
    // Handle user profile actions
    console.log('User profile clicked');
  };

  return (
    <header className={`dashboard-header ${className}`}>
      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9999 21L16.6499 16.65" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      <div className="user-profile" onClick={handleUserProfileClick}>
        <div className="user-avatar">
          {userAvatar ? (
            <img src={userAvatar} alt={userName} className="avatar-image" />
          ) : (
            <span>👤</span>
          )}
        </div>
        <span className="user-name">{userName}</span>
      </div>
    </header>
  );
}
