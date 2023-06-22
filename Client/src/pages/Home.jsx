import SongCard from "../components/home/SongCard"
import "./home.css"

const Home = ()=> {
    return(
        <main className="home">
            <section className="first-section">
                <div className="section-top">
                    <p className="section-head">Focus</p>
                    <a href="" className="show-all">show all</a>
                </div>
                <div className="song-card-container">
                    {
                        [1, 23, 3, 4, 5].map(ele => <SongCard key={ele} />)
                    }
                </div>
            </section>
            <section className="first-section">
                <div className="section-top">
                    <p className="section-head">Spotify playlist</p>
                    <a href="" className="show-all">show all</a>
                </div>
                <div className="song-card-container">
                    {
                        [1, 23, 3, 4, 5].map(ele => <SongCard key={ele} />)
                    }
                </div>
            </section>
            <section className="first-section">
                <div className="section-top">
                    <p className="section-head">Sound of India</p>
                    <a href="" className="show-all">show all</a>
                </div>
                <div className="song-card-container">
                    {
                        [1, 23, 3, 4, 5].map(ele => <SongCard key={ele} />)
                    }
                </div>
            </section>
        </main>
    )
}

export default Home