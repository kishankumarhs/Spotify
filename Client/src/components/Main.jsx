import { Outlet } from "react-router-dom"
import { RightOutlined, LeftOutlined, PlayCircleFilled } from '@ant-design/icons'
import './main.css'
import Footer from "./global/Footer"
import { useEffect, useState } from "react"

const Main = () => {
    const [show, setShow] = useState({
        opacity: 0
    })
    const [bgColor, setBgColor] = useState({
        background: "#121212cc"
    })

    useEffect(() => {
        const handleReachedEvent = () => {
            setShow({
                opacity: 1
            })
            setBgColor({
                background: "#1a1a17"
            })
        }
        const handleRemovedEvent = () => {
            setShow({
                opacity: 0,
            })
            setBgColor({
                background: "#121212cc"
            })
        }
        window.addEventListener('reached_top', handleReachedEvent)
        window.addEventListener('removed_top', handleRemovedEvent)

        return () => {
            window.removeEventListener('reached_top', handleReachedEvent)
            window.removeEventListener('removed_top', handleRemovedEvent)
        }
    }, [])

    return (
        <div className="main">
            <div className="main-top" style={bgColor}>
                <div className="navigation-arrows">
                    <div className="forward-arrow">
                        <LeftOutlined />
                    </div>
                    <div className="back-arrow">
                        <RightOutlined />
                    </div>
                </div>
                <div className="playlist-name-container" style={show}>
                    <PlayCircleFilled
                        className='play-circle'
                        style={{
                            fontSize: 50,
                            color: "#1BD760"
                        }} />
                    <h1 className="playlist-name">Playlist</h1>
                </div>
                <div className="buttons-container">
                    <button className="sign-up">sign up</button>
                    <button className="login">login</button>
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>

    )
}

export default Main