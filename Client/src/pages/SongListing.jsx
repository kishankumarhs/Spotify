import SongCard from "../components/home/SongCard"
import './songlisting.css'


const SongListing = () => {
    return (
        <div className="song-listing">
            {[1, 23, 3, 4, 5, 4, 5, 6, 7].map(ele => <SongCard key={ele} />)}
        </div>
    )
}

export default SongListing