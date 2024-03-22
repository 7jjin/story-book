type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButton {
  theme: PrimaryButtonTheme;
  isDisabled: boolean;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({ isDisabled, theme, children, onClick }: IPrimaryButton) {
  return (
    <button
      className={`rounded-primary-button w-full h-[59px] ${disabled} bg-primary ${color[theme]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
