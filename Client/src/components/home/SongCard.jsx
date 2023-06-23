import { useNavigate } from 'react-router-dom'
import './songCard.css'
import { PlayCircleFilled } from '@ant-design/icons'

const SongCard = () => {
    const navigate = useNavigate()

    return (
        <div className="song-card"
            onClick={() => navigate('/song-details')}
        >
            <div className="play-button">
                <PlayCircleFilled style={{
                    fontSize: 40,
                    color: "#1BD760"
                }} />
            </div>
            <div className="song-card-image-holder">
                <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
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