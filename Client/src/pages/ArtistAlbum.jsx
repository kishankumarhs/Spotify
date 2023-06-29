import { PlayCircleFilled,HeartOutlined ,EllipsisOutlined} from "@ant-design/icons"
import { Tooltip } from 'react-tooltip'


import "./artistalbum.css"

const ArtistAlbum = () => {
  return (
        <div className="artist-album-container">
            <div className="artist-album-head-container">
                <div className="artist-album-song-details-container">
                    <div className="artist-album-image">
                        <img src="https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581" alt="" />
                    </div>
                    <div className="artist-album-song-info-container">
                        <p className="song-text">Song</p>
                        <p className="album-name-text">glance out a casement window</p>
                        <div className="artist-album-name-song-length-container">
                            <div className="image-and-name-container">
                                <img src="https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581" alt="" />
                                <a href="">Janet Redger  </a>
                                <span className="span-dot">
                                •</span>
                            </div>
                            <p>glance out a casement window  <span>
                                • </span> </p>
                            <p>2023 <span>
                                •</span> </p>
                            <p>2:20</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="playlist-bottom-container">
                <div className="playlist-icons-container">
                    <div className="playlist-play-icon">
                        <PlayCircleFilled 
                        style={{
                            fontSize: 55,
                            color: "#1BD760"

                            }}/>
                        
                    </div>
                    <div>
                    <a className="my-anchor-element1"><HeartOutlined  className="heart-oulined-icon"/></a>
                    <Tooltip anchorSelect=".my-anchor-element1" place="top" tipPointerPosition="middle">
                        Save to Your Library
                    </Tooltip>   
                    </div>
                    <div>
                        <a className="my-anchor-element2"><EllipsisOutlined  className="elipises-outlined-icon"/></a>
                        <Tooltip anchorSelect=".my-anchor-element2" place="top" tipPointerPosition="middle">
                            More Options for Peaceful Piano
                        </Tooltip> 
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ArtistAlbum
