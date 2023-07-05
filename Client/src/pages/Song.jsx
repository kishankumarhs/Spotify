import { useState } from 'react'
import SongHead from '../components/songs/SongHead'
import './songdetails.css'

const Song = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="song-details song"
            style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                background: "url(https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581),#11111115",
                backgroundSize: 'cover',
            }} >

            <SongHead
                name='Glance Out A Casement Window'
                type='song'
                image='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                authorImage='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                author='Janet Redger'
                timing="4:30"
                date='2023'
                songs='Glance Out A Casement Window'
                functionName={setCount}
            />
            <div className="song-bottom-section">
                <h1>{count}</h1>
            </div>
        </div>
    )
}

export default Song