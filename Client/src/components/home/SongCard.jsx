import { useNavigate } from "react-router-dom"
import { PlayCircleFilled } from "@ant-design/icons"
import "./SongCard.css"

const SongCard = ({songImage, songTitle, songDescription}) => {
    const navigate = useNavigate()
    return(
        <div className="song-card" 
            onClick={()=> navigate('/song-details')}
        >
            <div className="play-button">
                <PlayCircleFilled style={{
                    fontSize: 40,
                    color: "#1BD760"

                }}/>
            </div>
            <div>
                <img src= {songImage || "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"} alt=""  
                className="song-card-image-holder"/>

            </div>
            <div className="song-card-info">
                <p className="song-card-title">
                    { songTitle || "peaceful piano"}
                </p>
                <p className="song-card-description">
                    { songDescription || "Peaceful piano to help you slow down breath,stress buster and clam you brain"}
                </p>
            </div>
        </div>

    )
}

export default SongCard