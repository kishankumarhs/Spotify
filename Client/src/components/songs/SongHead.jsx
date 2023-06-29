
import '../../pages/songdetails.css'

const SongHead = () => {
    return (
        <div className="song-head">
            <div className="song-image-container">
                <img src="https://i.scdn.co/image/ab67706f00000002d2291e0c5d43a1b21a941031" alt="" className="song-image" />
            </div>
            <div className="song-info">
                <div className="song-type">
                    playlist
                </div>
                <p className="song-title">
                    DayDreamer
                </p>
                <p className="song-description">
                    Drift away with enthralling instrumentals.
                </p>
                <div className="likes-and-songs-container">
                    <div className="spotify-logo">
                        <img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" alt="" />
                        <a href="/">Spotify</a>
                    </div>.
                    <p className="likes">12,23,23,3 likes</p> .
                    <p className="songs">321 songs</p> ,
                    <p className="time">about 11hr</p>
                </div>
            </div>
        </div>
    )
}

export default SongHead