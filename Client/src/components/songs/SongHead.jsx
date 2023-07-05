
import '../../pages/songdetails.css'

// eslint-disable-next-line react/prop-types
const SongHead = ({ image, type, name, description, songs, date, authorImage, author, timing, functionName }) => {



    return (
        <div className="song-head">
            <div className="song-image-container">
                <img src={image || "https://i.scdn.co/image/ab67706f00000002d2291e0c5d43a1b21a941031"} alt="" className="song-image" />
            </div>
            <div className="song-info">
                <div className="song-type">
                    {type || "playlist"}
                </div>
                <p className="song-title">
                    {name || "DayDreamer"}
                </p>
                {
                    description
                    &&
                    <p className="song-description">
                        {description}
                    </p>
                }

                <div className="likes-and-songs-container">
                    <div className="spotify-logo">
                        <img src={authorImage || "https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"} alt="" />
                        <a href="/">{author || "Spotify"}</a>
                    </div>.
                    <p className="likes">{songs || "12,23,23,3 likes"}</p> .
                    <p className="songs">{date || "321 songs"}</p> ,
                    <p className="time">{timing || "about 11hr"}</p>
                </div>
            </div>
            <button onClick={() => functionName((prev) => prev + 1)} >
                ADD
            </button>
        </div>
    )
}

export default SongHead