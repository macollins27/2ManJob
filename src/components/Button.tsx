import React from 'react';
import { classNames } from '../utils/classNames';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 min-w-[9rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const sizeStyles = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };
  
  const variantStyles = {
    primary: 'bg-accent text-slate-900 shadow-md hover:bg-accent-soft hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    secondary: 'border-2 border-slate-700 text-slate-900 bg-white/90 hover:bg-slate-100 focus-visible:ring-slate-700 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'text-slate-200 hover:text-white hover:bg-white/5 focus-visible:ring-white disabled:opacity-50 disabled:cursor-not-allowed',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
