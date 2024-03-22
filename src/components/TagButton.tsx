interface ITagButton {
  children: string;
  isChecked: boolean;
  onClick?: () => void;
}

export default function TagButton({ children, onClick, isChecked }: ITagButton) {
  const buttonStyle = isChecked ? "bg-white text-primary" : "text-white bg-dark-opacity";
  return (
    <button
      className={`text-sm font-medium rounded-tag-button px-[10px] border border-white h-[33px] ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
