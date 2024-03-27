import React, { useContext } from 'react'
import { Header} from './Header/Header'
import Footer from './Footer/Footer'
import { Theme } from '../Context/DarkMode'

const Layout = ({ children }) => {
    var { theme, ToggleTheme } = useContext(Theme)
    return ( 
        <div>
            <Header/>
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout