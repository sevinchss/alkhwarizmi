import React, { createContext, useEffect, useState } from 'react'

export var ThemeApi = createContext()

const Theme = ({ children }) => {
    var [theme, setTheme] = useState("light")
    useEffect(() => {
        localStorage.setItem("theme", theme === "light" ? "light" : "dark")
        console.log(theme);
    }, [theme])
    return (
        <ThemeApi.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeApi.Provider>
    )
}

export default Theme