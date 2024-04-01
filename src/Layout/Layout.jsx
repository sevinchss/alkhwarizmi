import React, { useContext } from 'react'
import { Header} from './Header/Header'
import Footer from './Footer/Footer'
import ThemeChanger from '../Utils/ThemeChanger'

const Layout = ({ children }) => {
    return ( 
        <div className={`${ThemeChanger("bg-white", "bg-[#020817] text-white")}`}>
            <Header/>
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout