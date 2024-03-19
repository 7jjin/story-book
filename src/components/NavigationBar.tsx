import IconButton from "./IconButton";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex justify-between">
      {/* 뒤로가기 버튼 */}
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton alt="back-arrow" iconPath="/icon/ic-public-delete-dark.svg" onClick={onBackButtonClick} />
        )}
        {/* 페이지 이름 */}
        {showTitle && <h1 className="text-2xl">{title}</h1>}
      </div>

      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton alt="close" iconPath="/icon/ic-public-delete-dark.svg" onClick={onCloseButtonClick} />
      )}
    </div>
  );
}
