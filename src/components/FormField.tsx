import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  iconTitle?: string;
}

const FormField: React.FC<IProps> = ({
  label,
  placeholder,
  error,
  wrapperClassName,
  labelClassName,
  inputClassName,
  inputContainerClassName,
  icon,
  iconTitle,
  onIconClick,
  ...props
}) => {
  return (
    <div className={`space-y-1 ${wrapperClassName}`}>
      <div className={`flex flex-col gap-y-1.5 `}>
        <label
          htmlFor={props.id}
          className={`font-medium text-neutral-800 ${labelClassName}`}
        >
          {label}
        </label>
        <div
          className={`flex items-center justify-between gap-x-2 rounded-md border border-gray-300 px-3 py-2 focus-within:ring-1 focus-within:ring-foreground ${inputContainerClassName}`}
        >
          <input
            id={props.id}
            placeholder={placeholder}
            {...props}
            className={`w-full focus:outline-none ${inputClassName}`}
          />
          {icon && (
            <div
              onClick={onIconClick}
              title={iconTitle}
              className="p-1 cursor-pointer"
            >
              {icon}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-red-800 text-sm">{error}</p>}
    </div>
  );
};

export default FormField;
