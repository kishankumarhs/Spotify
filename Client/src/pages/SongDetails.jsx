import './songdetails.css'
import SongList from '../components/songs/SongList'
import SongHead from '../components/songs/SongHead'

const SongDetails = () => {
    return (
        <div className="song-details">
            <SongHead
                description='Drift away with enthralling instrumentals.'
            />
            <SongList />
        </div>
    )
}

export default SongDetails
