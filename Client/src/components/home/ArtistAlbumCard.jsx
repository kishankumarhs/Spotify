import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tooltip } from 'react-tooltip'
import {HeartOutlined, EllipsisOutlined, CaretRightOutlined} from "@ant-design/icons"
import "./artistalbumcard.css"
import "./albumcard.css"

const ArtistAlbumCard = () => {
    const navigate = useNavigate()
    const [hover, setHover] = useState(false)
    return(
        <div className="album-list-container album-list-container2"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=> navigate('/artist-album')}>
            
                <span className="serial-no">
                {
                    hover ? <CaretRightOutlined style={{
                        fontSize: 20,
                    }} />
                        : "1"
                }
                </span>
                <div className="album-image-and-title" >
                    <div  className="album-image ">
                        <img src="https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581" alt=""  className="image2"/>
                    </div>
                
                    <div className="album-title-container">
                        <p className="album-title-desc desc2">glance out a casement window</p>
                    
                    </div>
                </div>
                    <p className="count-no">12,34,56,789</p>
           
                <div className="album-date-added">
                    
                    <div className="hidden-icons">
                        {hover ? <div>
                        <a className="my-anchor-element-heart"><HeartOutlined style={{
                            fontSize: 17
                        }} className="album-heart-icon"/> </a>
                    <Tooltip anchorSelect=".my-anchor-element-heart" place="top" tipPointerPosition="middle">
                        Save to Your Library
                    </Tooltip>   
                    </div>
                        
                        : null}  
                    </div>
                </div>
                
            
            <div className="album-time-container">
                
                
                <p className="album-time">2:50</p>
                <div className="hidden-ellipsis-icon">
                    {hover ? 
                    <div>
                    <a className="my-anchor-element-ellipsis"><EllipsisOutlined style={{
                            fontSize: 15
                        }} className="album-ellipsis-icon"/> </a>
                            <Tooltip anchorSelect=".my-anchor-element-ellipsis" place="top" tipPointerPosition="middle">
                            More Options for Peaceful Piano
                            </Tooltip>   
                    </div>
                        
                    : null}
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default ArtistAlbumCard