interface ChartData {
  label: string;
  value: number;
  percentage: number;
  color: string;
}

interface AdminStudentsChartProps {
  data?: ChartData[];
  title?: string;
  className?: string;
}

const defaultData: ChartData[] = [
  { label: 'Non-Inclusive', value: 435, percentage: 74, color: '#288474' },
  { label: 'Inclusive Students', value: 89, percentage: 26, color: '#A2EBC1' }
];

export default function AdminStudentsChart({
  data = defaultData,
  title = 'Students',
  className = ''
}: AdminStudentsChartProps) {
  // Calculate stroke-dasharray for donut chart
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  
  const createStrokeArray = (percentage: number) => {
    const strokeLength = (percentage / 100) * circumference;
    return `${strokeLength} ${circumference - strokeLength}`;
  };

  return (
    <div className={`content-card students-card ${className}`}>
      <h3 className="card-title">{title}</h3>
      
      <div className="chart-container">
        <div className="donut-chart">
          <div className="donut-chart-inner">
            <svg width="120" height="120" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle 
                cx="60" 
                cy="60" 
                r={radius} 
                fill="none" 
                stroke="#e0f2f1" 
                strokeWidth="20"
              />
              
              {/* Data segments */}
              {data.map((segment, index) => {
                const previousPercentages = data.slice(0, index).reduce((sum, item) => sum + item.percentage, 0);
                const offset = (previousPercentages / 100) * circumference;
                
                return (
                  <circle 
                    key={segment.label}
                    cx="60" 
                    cy="60" 
                    r={radius} 
                    fill="none" 
                    stroke={segment.color} 
                    strokeWidth="20" 
                    strokeDasharray={createStrokeArray(segment.percentage)}
                    strokeDashoffset={-offset}
                    transform="rotate(-90 60 60)"
                    className="chart-segment"
                  />
                );
              })}
            </svg>
          </div>
        </div>
        
        <div className="chart-legend">
          {data.map((item) => (
            <div key={item.label} className="legend-item">
              <div
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="legend-content">
                <div className="legend-label">{item.label}</div>
                <div className="legend-value">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="chart-summary">
          <div className="total-students">
            <span className="total-number">
              {data.reduce((sum, item) => sum + item.value, 0)}
            </span>
            <span className="total-label">Total Students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
