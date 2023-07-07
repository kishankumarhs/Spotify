
import "./artistalbumcard.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tooltip } from 'react-tooltip'
import {HeartOutlined, EllipsisOutlined, CaretRightOutlined} from "@ant-design/icons"

const ArtistAlbumCard = ({image,title,count}) => {
    const navigate = useNavigate()
    const [hover, setHover] = useState(false)
    
  return (
    <div className="artist-album-card-container"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=> navigate('/artist-album')}>
            <span className="artist-album-serial-no">
                {
                    hover ? <CaretRightOutlined style={{
                        fontSize: 20,
                    }} />
                        : "1"
                }
                </span>
        <div className="image-and-album-name-card-container">
          <div className="artist-album-image-card-container">
            <img src={image || null} 
            className="artist-album-card-image" alt=""  cl/>
          </div>
          <div  className='artist-album-card-name'>
            <p className="artist-album-card-name1">glance out a casement window</p>
            <p  className="artist-album-card-name2">{title || null}</p>
            
          </div>
          
        </div>
        <div className="count-no">
          <p>{count || null}</p>
              <div className="artist-album-hidden-icons">
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
        <div className="artist-album-song-length">
          <p>2:50</p>
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