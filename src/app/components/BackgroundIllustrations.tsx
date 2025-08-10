import Image from 'next/image';

interface BackgroundIllustrationsProps {
  variant?: 'login' | 'forgot-password';
  className?: string;
}

export default function BackgroundIllustrations({ 
  variant = 'login', 
  className = '' 
}: BackgroundIllustrationsProps) {
  return (
    <>
      {/* Background Decorations */}
      <div className={`decoration-dots ${className}`}>
        <Image
          src="/illustrations/background-dots.svg"
          alt=""
          fill
          className="object-cover pointer-events-none"
          priority={false}
        />
      </div>

      {/* Left Illustration */}
      <div className="left-illustration">
        {variant === 'login' ? (
          <div className="bookshelf-container">
            <Image
              src="/illustrations/bookshelf.svg"
              alt="Bookshelf illustration"
              width={120}
              height={160}
              priority={false}
            />
            <div className="plant-container">
              <Image
                src="/illustrations/plant.svg"
                alt="Plant illustration"
                width={80}
                height={100}
                priority={false}
              />
            </div>
          </div>
        ) : (
          <div className="plant-container-large">
            <Image
              src="/illustrations/plant.svg"
              alt="Large plant illustration"
              width={120}
              height={150}
              priority={false}
            />
          </div>
        )}
      </div>

      {/* Right Illustration */}
      <div className="right-illustration">
        <div className="desk-container">
          <Image
            src="/illustrations/desk.svg"
            alt="Desk and workspace illustration"
            width={200}
            height={150}
            priority={false}
          />
        </div>
      </div>
    </>
  );
}
