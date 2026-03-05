import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-md bg-foreground cursor-pointer px-4 py-2 text-white hover:bg-foreground/80 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
