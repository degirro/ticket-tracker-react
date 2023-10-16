import { createContext, PropsWithChildren, useEffect, useState } from "react";

type ThemeContextType = {
  darkSwitch: boolean;
  handleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(null as any);

export const ThemeContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [darkSwitch, setDarkSwitch] = useState<boolean>(true);

  const handleTheme = () => {
    const newLocalVal = !darkSwitch;
    setDarkSwitch(newLocalVal);
    localStorage.setItem("theme", newLocalVal.toString());
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setDarkSwitch(true);
    } else if (localStorage.getItem("theme") === "false") {
      setDarkSwitch(false);
    } else {
      setDarkSwitch(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkSwitch, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
