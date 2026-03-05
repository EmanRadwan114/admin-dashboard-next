import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const FormField: React.FC<IProps> = ({
  label,
  placeholder,
  error,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...props
}) => {
  return (
    <div className={`space-y-1 ${wrapperClassName}`}>
      <div className={`flex flex-col gap-y-1.5 `}>
        <label htmlFor={props.id} className={`font-medium ${labelClassName}`}>
          {label}
        </label>
        <input
          id={props.id}
          placeholder={placeholder}
          {...props}
          className={`w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-foreground ${inputClassName}`}
        />
      </div>
      {error && <p className="text-red-800 text-sm">{error}</p>}
    </div>
  );
};

export default FormField;
