import { useContext } from "react";
import {
  SwitchButton,
  ThemeContainer,
  ThemeSwitch,
} from "../../utils/styles/sidebar/SidebarThemeStyled";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../utils/context/ThemeContext";
import { themeButtonVariants } from "../../utils/variants/ModalVariants";

export const SideBarTheme = () => {
  const { handleTheme, darkSwitch } = useContext(ThemeContext);

  const handleSwitch = () => {
    handleTheme();
  };

  return (
    <ThemeContainer>
      <BsSunFill />
      <ThemeSwitch
        style={{ background: !darkSwitch ? "#00b800" : "#003800" }}
        onClick={handleSwitch}
      >
        <SwitchButton
          animate={!darkSwitch ? "light" : "dark"}
          variants={themeButtonVariants}
          transition={{ duration: 0.2 }}
        />
      </ThemeSwitch>
      <BsMoonStarsFill />
    </ThemeContainer>
  );
};
