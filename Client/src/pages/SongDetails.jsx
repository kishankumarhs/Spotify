import './songdetails.css'
import SongList from '../components/songs/SongList'
import SongHead from '../components/songs/SongHead'

const SongDetails = () => {
    return (
        <div className="song-details">
            <SongHead />
            <SongList />
        </div>
    )
}

export default SongDetails
