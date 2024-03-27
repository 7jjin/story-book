import { useState } from "react";
import IconButton from "./IconButton";

interface ISearchTextField {
  iconAlt: string;
  iconPath: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export default function SearchTextField({
  iconAlt,
  iconPath,
  onChange,
  onClick,
  value,
  placeholder,
  id,
}: ISearchTextField) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused ? "border-secondary" : "border-primary";
  const inputPadding = isFocused ? "p-[0px]" : "p-[12px]";
  return (
    <div
      className={`relative display flex justify-between border ${borderColor} ${inputPadding} w-[328px] h-[40px]`}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
    >
      <div className="flex">
        {!isFocused && !value && <IconButton alt={iconAlt} iconPath="/icon/search-icon.svg" onClick={onClick} />}
        <input
          className="ml-[12px] outline-none w-[133px] text-sm"
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {!isFocused && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onClick} />}
    </div>
  );
}
