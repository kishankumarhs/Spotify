import { Outlet } from "react-router-dom";
import {LeftOutlined, RightOutlined, PlayCircleFilled} from "@ant-design/icons"
import { useState, useEffect } from "react";
import Footer from "./global/Footer"
import "./main.css"

const Main = () => {
    const [show ,setShow] = useState({
        opacity: 0
    })

    const [bgColor , setBgColor] = useState({
        background: "#121212cc"
    })

    useEffect(()=> {
        const handleReachedEvent = () => {
            setShow({
                opacity: 1
            })
            setBgColor({
                background :"#1a1a17"
            })
        }
        const handleRemovedEvent = () => {
            setShow({
                opacity: 0
            })
            setBgColor({
                background :"#121212cc"
            })
        }

        window.addEventListener("reached_top", handleReachedEvent)
        window.addEventListener("removed_top", handleRemovedEvent)

        return () => {
            window.removeEventListener("reached_top", handleReachedEvent)
            window.removeEventListener("removed_top", handleRemovedEvent)
        }
    } , [])

    return(
        <div className="main">
            <div className="main-top" style={bgColor}>
                <div className="navigation-arrows">
                    <div className="left-arrow"><LeftOutlined/></div>
                    <div className="right-arrow"><RightOutlined/></div>
                </div>
                <div className="playlist-play-icon1" style={show}>
                        <PlayCircleFilled 
                        style={{
                            fontSize: 55,
                            color: "#1BD760"

                            }}/>
                        <h1>Playlist</h1>
                    </div>
                <div className="buttons-container">
                    
                    <button className="sign-up-button">Sign up</button>
                    <button className="log-in-button">Log in</button>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main