
import { createContext, useState } from "react";
export const themeContext = createContext();

const ThemePorovider =({children})=>{
  const[theme,setTheme]=useState("lightMode");

  return(
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
 );
};
export default ThemePorovider;
