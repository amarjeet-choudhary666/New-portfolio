import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  skill: string;
  percentage: number;
  color: string;
  delay?: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ 
  skill, 
  percentage, 
  color, 
  delay = 0 
}) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(75, 85, 99, 0.3)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{
              duration: 2,
              delay,
              ease: "easeInOut"
            }}
            style={{
              filter: `drop-shadow(0 0 6px ${color}40)`,
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 1, duration: 0.5 }}
            className="text-sm font-bold text-white"
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      
      {/* Skill name */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
        className="text-sm text-gray-300 text-center font-medium"
      >
        {skill}
      </motion.span>
    </div>
  );
};

export default SkillProgress;