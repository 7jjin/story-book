import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  errormessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errormessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? "border-secondary" : !value ? "border-mono300" : "border-primary";
  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primart border-b border-primary ${borderColor}`}
      >
        <input
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
        {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath}></IconButton>}
      </div>
      {isError && <ErrorMessage>{errormessage}</ErrorMessage>}
    </div>
  );
}
