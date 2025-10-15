import React, { useEffect, useRef, useCallback } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create stars with twinkling effect
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    // Optimized star count
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add subtle glow effect
        if (star.opacity > 0.7) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.1})`;
          ctx.fill();
        }

        // Twinkle animation
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const cleanup = animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (cleanup) cleanup();
    };
  }, [animate]);

  return (
    <>
      {/* Dark Galaxy gradient background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(30, 20, 60, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(60, 20, 80, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 40% 80%, rgba(20, 40, 80, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)
          `
        }}
      />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Dark Galaxy Planets */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Blue Planet - Darker */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-12 blur-sm"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1e3a8a, #1e40af, #0f172a)',
            boxShadow: '0 0 40px rgba(30, 58, 138, 0.2), inset -10px -10px 20px rgba(0,0,0,0.5)',
            animation: 'planetOrbit1 25s linear infinite'
          }}
        />

        {/* Medium Purple Planet - Darker */}
        <div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full opacity-15 blur-sm"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #581c87, #6b21a8, #0f0f23)',
            boxShadow: '0 0 30px rgba(88, 28, 135, 0.2), inset -8px -8px 16px rgba(0,0,0,0.5)',
            animation: 'planetOrbit2 20s linear infinite reverse'
          }}
        />

        {/* Small Pink Planet - Darker */}
        <div
          className="absolute top-2/3 right-1/3 w-16 h-16 rounded-full opacity-18 blur-sm"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #831843, #9d174d, #0f0f23)',
            boxShadow: '0 0 25px rgba(131, 24, 67, 0.2), inset -6px -6px 12px rgba(0,0,0,0.5)',
            animation: 'planetOrbit3 15s linear infinite'
          }}
        />

        {/* Tiny Cyan Planet - Darker */}
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full opacity-20 blur-sm"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #0e7490, #155e75, #0f0f23)',
            boxShadow: '0 0 20px rgba(14, 116, 144, 0.2), inset -4px -4px 8px rgba(0,0,0,0.5)',
            animation: 'planetOrbit4 12s linear infinite reverse'
          }}
        />

        {/* Orange Planet - Darker */}
        <div
          className="absolute bottom-1/4 right-1/5 w-20 h-20 rounded-full opacity-12 blur-sm"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #c2410c, #ea580c, #0f0f23)',
            boxShadow: '0 0 25px rgba(194, 65, 12, 0.2), inset -7px -7px 14px rgba(0,0,0,0.5)',
            animation: 'planetOrbit5 30s linear infinite'
          }}
        />

        {/* Dark Nebula clouds */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 25% 25%, rgba(30, 20, 60, 0.2) 0%, transparent 70%),
              radial-gradient(ellipse 600px 300px at 75% 75%, rgba(60, 20, 80, 0.15) 0%, transparent 70%)
            `,
            animation: 'nebulaShift 40s ease-in-out infinite alternate'
          }}
        />
      </div>
    </>
  );
};

export default StarryBackground;