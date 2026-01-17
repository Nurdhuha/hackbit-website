import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    href?: string;
}

const Button = ({
    children,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
    href,
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full px-6 py-2.5 text-sm";

    const variants = {
        primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm focus:ring-orange-500",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-100",
        outline: "bg-transparent border border-current hover:bg-white/10 focus:ring-white",
    };

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
