import Main from "../Main"
import Navbar from "./Navbar"

import "./Layout.css"

const Layout = () => {
    return(
        <div className="layout-wraper"> 
        <Navbar/>
        <Main/>

        
    </div>
    )
}

export default Layout