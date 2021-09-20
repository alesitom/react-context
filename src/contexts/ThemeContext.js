import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true)

    const themeStyles = {
        color: isLightTheme ? '#555' : '#ddd',
        backgroundColor: isLightTheme ? '#eee' : '#555'
    }

    const toggleTheme = () => {
        isLightTheme === true ? setIsLightTheme(false) : setIsLightTheme(true)
    }

    return (
        <ThemeContext.Provider value={{themeStyles, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider