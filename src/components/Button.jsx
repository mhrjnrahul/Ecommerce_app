import React from 'react'

const Button = ({
    children,
    variant = '',
    size = 'md',
    icon,
    iconPosition = 'left',
    loading = false,
    fullWidth = false,
    disabled = false,
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    const VARIANTS = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    login: "bg-green-600 hover:bg-green-700 text-white",
    signup: "bg-purple-600 hover:bg-purple-700 text-white",
    cart: "bg-orange-500 hover:bg-orange-600 text-white",
    checkout: "bg-red-600 hover:bg-red-700 text-white",
    wishlist: "bg-pink-500 hover:bg-pink-600 text-white",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
    }

    const SIZES = {
        sm: "px-3 py-1 text:sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    }

    const baseClasses = "font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center";
    const variantClasses = VARIANTS[variant] || VARIANTS.primary;
    const sizeClasses = SIZES[size] || SIZES.md;
    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled || loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
    
    const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${disabledClass} ${className}`;

  return (
    <button
    type={type}
    className={buttonClasses}
    disabled={disabled || loading}
    onClick={onClick}>
    {...props}
    </button>
  )
}

export default Button