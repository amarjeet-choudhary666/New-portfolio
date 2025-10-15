import React from 'react';

// Simplified meteor shower with CSS animations for better performance
const MeteorShower: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Reduced from 8 to 3 meteors */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60 meteor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;