import { useContext } from "react"
import { ThemeApi } from "../Context/DarkMode"

var ThemeChanger = (light, dark) => {
    var { theme } = useContext(ThemeApi)
    var style = theme === "light" ? light : dark
    return style
}
export default ThemeChanger