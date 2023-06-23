import SongCard from "../components/home/SongCard"
import "./songListing.css"

const SongListing = ()=> {
    return(
        <div className="song-listing">
            {
                        [1, 23, 3, 4, 5,6, 7, 8,].map(ele => <SongCard key={ele} />)
                    }
        </div>

    )
}

export default SongListing