import React, { InputHTMLAttributes, useState } from "react";
import FormField from "./FormField";
import { Eye, EyeOff } from "lucide-react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
}

const PasswordField: React.FC<IProps> = ({
  label,
  placeholder,
  error,
  wrapperClassName,
  labelClassName,
  inputClassName,
  inputContainerClassName,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <FormField
        label={label}
        placeholder={placeholder}
        error={error}
        wrapperClassName={wrapperClassName}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        type={showPassword ? "text" : "password"}
        icon={showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
        inputContainerClassName={inputContainerClassName}
        onIconClick={() => setShowPassword(!showPassword)}
        iconTitle={showPassword ? "Hide password" : "Show password"}
        {...props}
      />
    </div>
  );
};

export default PasswordField;
