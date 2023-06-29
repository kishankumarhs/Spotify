import { PlayCircleFilled,HeartOutlined ,EllipsisOutlined, ClockCircleOutlined} from "@ant-design/icons"
import { Tooltip } from 'react-tooltip'
import AlbumCard from "../components/home/AlbumCard"
import "./songDetails.css"

const SongDetails = () => {
    return(
        <div className="play-list-container">
            <div className="playlist-head-container">
                <div className="song-details-container">
            <div className="playlist-image">
                <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />    
            </div>
            <div className="play-list-info">
                <p className="playlist-text">Playlist</p>
                <h1 className="playlist-head">Peaceful Piano</h1>
                <p className="palylist-desc">Peaceful piano to help you slow down, breathe, and relax.</p>
                <div className="likes-and-songs-container">
                    <div className="spotify-logo">
                        <img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" alt="" />
                        <a href="">Spotify .</a>
                    </div>
                    <p className="playlist-likes">7,078,971 likes .</p>
                    <p className="playlist-no-of-songs">310 songs ,</p>
                    <p className="playlist-no-of-hours">about 11 hr</p>


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
                <div className="playlist-songs-and-album-head-container">
                    <div className="hash-and-title-head">
                        <p className="hash-head">#</p>
                        <p className="title-head">Title</p>
                    </div>
                    <p className="album-head">Album</p>
                    <p className="date-added-head">Date added</p>
                    <ClockCircleOutlined className="clock-icon"/>
                </div>
                <hr className="hr-line"/>
                    <ol className="album-card-container">
                        {
                            [1, 2, 3, 4, 5, 6, 7,1, 1, 1,2,3,45].map(ele => <AlbumCard key={ele} />)
                        }
                    </ol>
            </div>
        </div>
    )
}

export default SongDetails