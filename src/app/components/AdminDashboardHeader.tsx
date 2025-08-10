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
          <span className="search-icon">🔍</span>
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
