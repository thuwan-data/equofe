interface StatCard {
  id: string;
  icon: string;
  number: number | string;
  label: string;
  bgColor: string;
}

interface AdminStatsCardsProps {
  stats?: StatCard[];
  className?: string;
}

const defaultStats: StatCard[] = [
  { id: 'teachers', icon: '👨‍🏫', number: 24, label: 'Total Teachers', bgColor: '#26a69a' },
  { id: 'students', icon: '👥', number: 524, label: 'Total Students', bgColor: '#42a5f5' },
  { id: 'inclusive', icon: '🤝', number: 89, label: 'Total Inclusive Students', bgColor: '#66bb6a' },
  { id: 'classes', icon: '📚', number: 24, label: 'Total Classes', bgColor: '#ffa726' }
];

export default function AdminStatsCards({ 
  stats = defaultStats, 
  className = '' 
}: AdminStatsCardsProps) {
  return (
    <section className={`stats-section ${className}`}>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div 
              className="stat-icon"
              style={{ backgroundColor: stat.bgColor }}
            >
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
