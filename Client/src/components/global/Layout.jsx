import Main from "../Main"
import Navbar from "./Navbar"
import './layout.css'


const Layout = () => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <Main />
        </div>
    )
}

export default Layout