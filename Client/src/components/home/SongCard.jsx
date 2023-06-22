import { PlayCircleFilled } from "@ant-design/icons"
import "./SongCard.css"

const SongCard = () => {
    return(
        <div className="song-card">
            <div className="play-button">
                <PlayCircleFilled style={{
                    fontSize: 40,
                    color: "#089e1e"

                }}/>
            </div>
            <div className="song-card-image-holder">
                <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />

            </div>
            <div className="song-card-info">
                <p className="song-card-title">
                    peaceful piano
                </p>
                <p className="song-card-description">
                    Peaceful piano to help you slow down breath,stress buster and clam you brain 
                </p>
            </div>
        </div>

    )
}

export default SongCard