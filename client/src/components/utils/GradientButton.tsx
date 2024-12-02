import React from 'react';
import { Button } from '../ui/button';

interface GradientButtonProps {
    gradient: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
}

const GradientButton = ({
    gradient,
    children,
    variant = 'primary',
    className = '',
    onClick
}: GradientButtonProps) => {
    const baseStyles = "relative group overflow-hidden rounded-full px-6 py-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900";

    const variants = {
        primary: `bg-gradient-to-r ${gradient} text-white dark:text-white`,
        secondary: `bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent hover:border-current`,
        outline: `bg-transparent border-2 hover:bg-gradient-to-r ${gradient} text-gray-900 dark:text-white hover:text-white`
    };

    return (
        <Button
            className={`
        ${variants[variant]}
        ${className}
        w-full flex gap-4 items-center justify-center
      `}
            onClick={onClick}
        >
            <span className="relative z-10 font-medium flex justify-center items-center gap-2">{children}</span>
            <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </Button>
    );
};

export default GradientButton;