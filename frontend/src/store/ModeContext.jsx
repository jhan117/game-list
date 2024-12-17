import { createContext, useState, useEffect } from "react";

const ModeContext = createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("mode", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
      }
      return newMode;
    });
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
