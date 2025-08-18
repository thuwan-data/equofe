import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`teacher-layout ${inter.className}`}>
      {children}
    </div>
  );
}
