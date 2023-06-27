import { useState } from 'react'
import './songListing.css'
import { ClockCircleOutlined, PlayCircleFilled, HeartOutlined, EllipsisOutlined, CaretRightOutlined } from '@ant-design/icons'
const SongList = () => {
    return (
        <div className="song-list">
            <div className="song-listing-top">
                <PlayCircleFilled
                    className='play-circle'
                    style={{
                        fontSize: 50,
                        color: "#1BD760"
                    }} />
                <HeartOutlined
                    className='heart-outlined'
                    style={{
                        fontSize: 35,
                        color: "#c3c4c6"
                    }} />
                <EllipsisOutlined
                    style={{
                        fontSize: 40,
                        color: "#c3c4c6"
                    }} />
            </div>
            <div className="song-listing-container">
                <div className="song-heading">
                    <span className="no">
                        #
                    </span>
                    <span className="title">
                        Title
                    </span>
                    <span className="album">
                        Album
                    </span>
                    <span className="date-added">
                        Date added
                    </span>
                    <span className="length">
                        <ClockCircleOutlined style={{
                            fontSize: "20px"
                        }} />
                    </span>
                </div>
                <div className="songs-container">
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                </div>
            </div>
        </div>
    )
}

export default SongList


const Song = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className="song-wrapper"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className="sl-no">
                {
                    hover ? <CaretRightOutlined style={{
                        fontSize: 20,
                    }} />
                        : "1"
                }
            </span>
            <div className="song-info-wrapper">
                <div className="song-image">
                    <img src="https://i.scdn.co/image/ab67616d0000485199175f73407a5eb9b768b669" alt="" />
                </div>
                <div className="song-title-info">
                    <p className='song-name'>Clam Wild  Clam Wild Clam Wild</p>
                    <p className="artist">Elfrieda</p>
                </div>
            </div>
            <div className="song-album">
                <p>Clam Wild</p>
            </div>
            <div className="song-date">
                <p>
                    1 day ago
                </p>
                <div className="icon">
                    {
                        hover ? <HeartOutlined style={{
                            fontSize: 20,
                        }} />
                            : null
                    }
                </div>
            </div>
            <div className="song-length">
                <p>2:45</p>
            </div>
        </div>
    )

}