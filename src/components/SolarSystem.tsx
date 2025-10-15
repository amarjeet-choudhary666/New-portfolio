import React from 'react';

const SolarSystem: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      {/* Solar System Container - Positioned in top right */}
      <div className="absolute top-1/4 right-1/4 transform scale-50">
        
        {/* Sun */}
        <div 
          className="absolute w-12 h-12 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)',
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.4), 0 0 100px rgba(251, 191, 36, 0.2)',
            animation: 'sunGlow 4s ease-in-out infinite alternate'
          }}
        />

        {/* Mercury Orbit */}
        <div 
          className="absolute border border-gray-700/20 rounded-full"
          style={{ 
            width: '120px', 
            height: '120px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-2 h-2 rounded-full bg-gray-400"
            style={{
              top: '-1px',
              left: '50%',
              transformOrigin: '1px 61px',
              animation: 'orbit 8s linear infinite'
            }}
          />
        </div>

        {/* Venus Orbit */}
        <div 
          className="absolute border border-gray-700/15 rounded-full"
          style={{ 
            width: '160px', 
            height: '160px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b)',
              top: '-1.5px',
              left: '50%',
              transformOrigin: '1.5px 81px',
              animation: 'orbit 12s linear infinite'
            }}
          />
        </div>

        {/* Earth Orbit */}
        <div 
          className="absolute border border-gray-700/10 rounded-full"
          style={{ 
            width: '200px', 
            height: '200px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1e40af, #1e3a8a)',
              top: '-2px',
              left: '50%',
              transformOrigin: '2px 101px',
              animation: 'orbit 16s linear infinite'
            }}
          />
        </div>

        {/* Mars Orbit */}
        <div 
          className="absolute border border-gray-700/8 rounded-full"
          style={{ 
            width: '240px', 
            height: '240px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #dc2626, #b91c1c, #991b1b)',
              top: '-1.5px',
              left: '50%',
              transformOrigin: '1.5px 121px',
              animation: 'orbit 20s linear infinite'
            }}
          />
        </div>

        {/* Jupiter Orbit */}
        <div 
          className="absolute border border-gray-700/5 rounded-full"
          style={{ 
            width: '320px', 
            height: '320px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-8 h-8 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #d97706, #b45309, #92400e)',
              top: '-4px',
              left: '50%',
              transformOrigin: '4px 161px',
              animation: 'orbit 28s linear infinite'
            }}
          />
        </div>

        {/* Saturn Orbit */}
        <div 
          className="absolute border border-gray-700/3 rounded-full"
          style={{ 
            width: '380px', 
            height: '380px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-6 h-6 rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)',
              top: '-3px',
              left: '50%',
              transformOrigin: '3px 191px',
              animation: 'orbit 35s linear infinite'
            }}
          >
            {/* Saturn's Ring */}
            <div 
              className="absolute border border-yellow-400/30 rounded-full"
              style={{
                width: '16px',
                height: '16px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>

        {/* Uranus Orbit */}
        <div 
          className="absolute border border-gray-700/2 rounded-full"
          style={{ 
            width: '440px', 
            height: '440px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #06b6d4, #0891b2, #0e7490)',
              top: '-2px',
              left: '50%',
              transformOrigin: '2px 221px',
              animation: 'orbit 42s linear infinite'
            }}
          />
        </div>

        {/* Neptune Orbit */}
        <div 
          className="absolute border border-gray-700/1 rounded-full"
          style={{ 
            width: '500px', 
            height: '500px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #1e40af, #1e3a8a, #1e293b)',
              top: '-2px',
              left: '50%',
              transformOrigin: '2px 251px',
              animation: 'orbit 50s linear infinite'
            }}
          />
        </div>

        {/* Asteroid Belt between Mars and Jupiter */}
        <div 
          className="absolute border-dashed border-gray-600/10 rounded-full"
          style={{ 
            width: '280px', 
            height: '280px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Asteroids */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full"
              style={{
                top: '-0.5px',
                left: '50%',
                transformOrigin: '0.5px 141px',
                animation: `orbit ${25 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

      </div>

      {/* Comets */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="comet"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;