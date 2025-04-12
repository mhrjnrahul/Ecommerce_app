import React from "react";
import { clsx } from "clsx"; 

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  icon: Icon = null,
}) => {
  const baseStyles = "rounded-full font-medium transition-all flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "bg-blue-500 text-white",
    ghost: "bg-white text-black",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      {loading ? (
        <span className="animate-spin rounded-full border-t-2 border-black w-4 h-4"></span>
      ) : (
        <>
          {Icon && <Icon className="w-4 h-4" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
