import React from "react";

interface IProps {
  className?: string;
}

const Spinner: React.FC<IProps> = ({ className }) => {
  return (
    <span
      className={`loader border-white! border-b-transparent! size-6! border-3! ${className}`}
    ></span>
  );
};

export default Spinner;
