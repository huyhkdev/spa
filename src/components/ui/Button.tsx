import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full';
  
  const variants = {
    primary: 'bg-[#D4AF37] text-white hover:bg-[#b8962f] shadow-md hover:shadow-lg',
    secondary: 'bg-[#4A5D4E] text-white hover:bg-[#3a4d3e] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
