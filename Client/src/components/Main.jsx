import { Outlet } from "react-router-dom"
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main-top">
                <div className="navigation-arrows">
                    <div className="forward-arrow">
                        <LeftOutlined />
                    </div>
                    <div className="back-arrow">
                        <RightOutlined />
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="sign-up">sign up</button>
                    <button className="login">login</button>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Main