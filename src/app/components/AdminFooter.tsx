interface AdminFooterProps {
  className?: string;
}

export default function AdminFooter({ className = '' }: AdminFooterProps) {
  return (
    <footer className={`login-footer ${className}`}>
      <p>Copyright (c) 2024 Equo | Privacy Policy</p>
    </footer>
  );
}
