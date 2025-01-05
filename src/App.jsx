import React, { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { useLocalStorage } from "usehooks-ts";

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
  }, [theme]);


  return (
    <>
      <Sidebar data-theme={theme} />
      <Main data-theme={theme} switchTheme={switchTheme} />
    </>
  );
};

export default App;
