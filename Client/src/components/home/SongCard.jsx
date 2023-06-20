import './songCard.css'
import { PlayCircleFilled } from '@ant-design/icons'

const SongCard = () => {
    return (
        <div className="song-card">
            <div className="play-button">
                <PlayCircleFilled style={{
                    fontSize: 40,
                    color: "#2f2f"
                }} />
            </div>
            <div className="song-card-image-holder">
                <img src="https://i.scdn.co/image/ab67706f000000024a7b7b828b33d4ba83a63a27" alt="" />
            </div>
            <div className="song-card-info">
                <p className="song-card-title">
                    Lorem, ipsum.
                </p>
                <p className="song-card-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, debitis?
                </p>
            </div>
        </div>
    )
}

export default SongCard