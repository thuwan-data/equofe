'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AdminSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  className?: string;
}

export default function AdminSidebar({ 
  activeItem = 'dashboard', 
  onItemClick,
  className = '' 
}: AdminSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'teachers', icon: '👨‍🏫', label: 'Teachers' },
    { id: 'classes', icon: '📚', label: 'Classes' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'financials', icon: '💰', label: 'Financials' },
    { id: 'subscriptions', icon: '📋', label: 'Subscriptions' }
  ];

  const footerItems = [
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'support', icon: '🛠️', label: 'Support' }
  ];

  const handleItemClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <aside className={`dashboard-sidebar ${isCollapsed ? 'collapsed' : ''} ${className}`}>
      <div className="sidebar-header">
        <div className="brand-logo-dashboard">
          <Image
            src="/logo-equo.svg"
            alt="Equo - Education for all"
            width={isCollapsed ? 40 : 120}
            height={40}
            priority
          />
        </div>
        <button 
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li 
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'nav-item-active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {!isCollapsed && <span className="nav-text">{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <ul className="footer-nav">
          {footerItems.map((item) => (
            <li 
              key={item.id}
              className="nav-item"
              onClick={() => handleItemClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {!isCollapsed && <span className="nav-text">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
