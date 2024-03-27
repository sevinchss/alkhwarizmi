import React, { createContext, useState } from 'react'

export const Theme = createContext()


const DarkMode = ({ children }) => {
  var [theme, setTheme] = useState("light")
  function ToggleTheme() {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <Theme.Provider value={{ theme, ToggleTheme }}>
      {children}
    </Theme.Provider>
  )
}

export default DarkMode