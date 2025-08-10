import Image from 'next/image';

interface AdminHeaderProps {
  className?: string;
}

export default function AdminHeader({ className = '' }: AdminHeaderProps) {
  return (
    <header className={`login-header ${className}`}>
      <div className="brand-logo">
        <Image
          src="/logo-equo.svg"
          alt="Equo - Education for all"
          width={120}
          height={40}
          priority
        />
      </div>
      <div className="language-selector">
        <span>Language</span>
        <select className="language-dropdown">
          <option>English</option>
          <option>Urdu</option>
          <option>Arabic</option>
        </select>
      </div>
    </header>
  );
}
