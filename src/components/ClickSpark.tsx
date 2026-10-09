import React, { useRef, useEffect, ReactNode } from 'react';
import { playClickSound } from '../utils/sound';

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  alpha: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  children: ReactNode;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let sparks: Spark[] = [];
    let startTime: number | null = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (elapsed < duration) {
        sparks.forEach((spark) => {
          spark.x += Math.cos(spark.angle) * spark.speed;
          spark.y += Math.sin(spark.angle) * spark.speed;
          spark.alpha = 1 - elapsed / duration;

          ctx.save();
          ctx.globalAlpha = spark.alpha;
          ctx.fillStyle = sparkColor;
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        animationId = requestAnimationFrame(animate);
      } else {
        sparks = [];
        startTime = null;
      }
    };

    const handleClick = (e: MouseEvent) => {
      playClickSound(); // Play tactile mechanical click audio sound effect

      const x = e.clientX;
      const y = e.clientY;

      sparks = Array.from({ length: sparkCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * sparkRadius) / 4 + 1;
        return {
          x,
          y,
          angle,
          speed,
          size: Math.random() * (sparkSize / 2) + sparkSize / 2,
          alpha: 1,
        };
      });

      startTime = null;
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
