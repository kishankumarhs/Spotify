import { Outlet } from "react-router-dom";
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import "./main.css"

const Main = () => {
    return(
        <div className="main">
            <div className="main-top">
                <div className="navigation-arrows">
                    <div className="left-arrow"><LeftOutlined/></div>
                    <div className="right-arrow"><RightOutlined/></div>
                </div>
                <div className="buttons-container">
                    
                    <button className="sign-up-button">Sign up</button>
                    <button className="log-in-button">Log in</button>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Main