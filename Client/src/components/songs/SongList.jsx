import { useEffect, useState } from 'react'
import './songListing.css'
import { ClockCircleOutlined, PlayCircleFilled, HeartOutlined, EllipsisOutlined, CaretRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SongList = ({ show_song_list = true }) => {
    const [songHeadStyle, setSongHeadStyle] = useState({
        background: "transparent"
    })
    useEffect(() => {
        const handleScroll = () => {
            var songListTop = document.querySelector('.song-listing-top');
            var songHeading = document.querySelector('.song-heading');
            if (songHeading) {
                if (songHeading.getBoundingClientRect().top <= 83) {
                    setSongHeadStyle({
                        background: "#1a1a17"
                    })
                } else {
                    setSongHeadStyle({
                        background: "transparent"
                    })
                }
            }
            if (songListTop) {
                var top = songListTop.getBoundingClientRect().top
                if (top <= 75) {
                    const event = new CustomEvent("reached_top", {
                        detail: "DayDreamer",
                    })
                    dispatchEvent(event)
                } else {
                    dispatchEvent(new CustomEvent("removed_top"))

                }
            }
        }
        const main = document.querySelector(".main")
        if (main) {
            main.addEventListener('scroll', handleScroll)
        }

        return () => main && main.removeEventListener('scroll', handleScroll)
    }, [])

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
                {
                    show_song_list &&
                    <div className="song-heading" style={songHeadStyle}>
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
                }
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


// eslint-disable-next-line react/prop-types
const Song = ({ songImage, songName, songAuthor, album }) => {
    const navigate = useNavigate()

    const [hover, setHover] = useState(false)
    return (
        <div className="song-wrapper"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigate("/song")}
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
                    <img src={songImage || "https://i.scdn.co/image/ab67616d0000485199175f73407a5eb9b768b669"} alt="" />
                </div>
                <div className="song-title-info">
                    <p className='song-name'>{songName || "Clam Wild  Clam Wild Clam Wild"}</p>
                    <p className="artist">{songAuthor || "Elfrieda"}</p>
                </div>
            </div>
            <div className="song-album">
                <p>{album || "Clam Wild"}</p>
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