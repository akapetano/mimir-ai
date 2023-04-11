import { Button } from "../../atoms/Button/Button";
import { SunIcon } from "../../atoms/icons/SunIcon/SunIcon";
import { MoonIcon } from "../../atoms/icons/MoonIcon/MoonIcon";

export const ThemeModeButton = () => {
  const isDark = false;
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <Button
      label=""
      iconOnly
      icon={
        isDark ? (
          <SunIcon width="20" height="20" />
        ) : (
          <MoonIcon width="20" height="20" />
        )
      }
      type="submit"
      variant="primary"
      className="absolute top-3 right-2 text-white"
      onClick={onClick}
    />
  );
};
