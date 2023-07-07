import { PlayCircleFilled,HeartOutlined ,EllipsisOutlined} from "@ant-design/icons"
import { useEffect } from "react"
import { Tooltip } from 'react-tooltip'
import ArtistAlbumCard  from "../components/home/ArtistAlbumCard"
import SongTopCard from "../components/songs/SongTopCard"

import "./artistalbum.css"
import SongCard from "../components/home/SongCard"

const ArtistAlbum = () => {

    useEffect(()  => {
        const handleScroll = () =>{
            var songListTop = document.querySelector(".playlist-icons-container")
                if (songListTop){
                    var top = songListTop.getBoundingClientRect().top
                    if (top <= 75){
                        const event = new CustomEvent("reached_top", {
                            detail: "Glance Out A Casement Window",
                        })
                        dispatchEvent(event)
                    }else{
                        dispatchEvent(new CustomEvent("removed_top"))
                    }
                }
            }
                const main = document.querySelector(".main")
                if (main){
                    main.addEventListener("scroll", handleScroll)
                }
                return () => main&& main.removeEventListener("scroll", handleScroll)

               
    }, [])
  return (
        <div className="artist-album-container song">
            <div className="song-top-card-container song-top-card" >
                <SongTopCard 
                    name='Glance Out A Casement Window'
                    type='song'
                    image='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                    authorImage='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                    author='Janet Redger'
                    timing="4:30"
                    date='2023'
                    songs='Glance Out A Casement Window'
                />
            </div>
            
            <div className="playlist-bottom-container1">
                <div className="playlist-icons-container">
                    <div className="playlist-play-icon">
                        <PlayCircleFilled 
                        style={{
                            fontSize: 55,
                            color: "#1BD760"

                            }}/>
                        
                    </div>
                    <div>
                    <a className="my-anchor-element1"><HeartOutlined  className="heart-oulined-icon"/></a>
                    <Tooltip anchorSelect=".my-anchor-element1" place="top" tipPointerPosition="middle">
                        Save to Your Library
                    </Tooltip>   
                    </div>
                    <div>
                        <a className="my-anchor-element2"><EllipsisOutlined  className="elipises-outlined-icon"/></a>
                        <Tooltip anchorSelect=".my-anchor-element2" place="top" tipPointerPosition="middle">
                            More Options for Peaceful Piano
                        </Tooltip> 
                        
                    </div>
                </div>
                <div className="artist-album-signup-login-container">
                    <p>Sign in to see lyrics and listen to the full track</p>
                    <div className="lyrics-signup-and-login">
                        <button className="lyrics-login-btn">Log in</button>
                        <button className="lyrics-signup-btn">Sign up</button>
                    </div>
                </div>
                <div className="album-artist-image-and-info">
                    <div className="album-artist-img">
                        <img src="https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581" alt="" />
                    </div>
                    
                    <div className="album-artist-info">
                        <p>Artist</p>
                        <p className="artist-name">Janet Redger</p>
                    </div>
                </div>
                <div className="popular-tracks-of-artist">
                    <p>Popular Tracks by</p>
                    <h1>Janet Redger</h1>
                </div>
                <div className="artist-album-cards-containers">
                    {
                        [1, 2, 3, 4, 5].map(ele => <ArtistAlbumCard key={ele} 
                            image="https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581"
                            count="13,345,776"
                        />)
                    }
                
                </div>
                <div className="popular-releases-by-artist-container">
                    <p className="artist-specialized-heading">Popular Releases by Janet Redger</p>
                    <div className="album-song-cards-container album-song">
                        {
                            [1, 23, 3, 4, 5,].map(ele => <SongCard key={ele} 
                                songImage='https://i.scdn.co/image/ab67616d00001e029b463f85df6ccaeb17407bcc'
                                songTitle="Glance Out Of A Casement Window"
                                songDescription="2023 • single"
                            />)
                        }
                    </div>
                    <p className="artist-specialized-heading">Popular Albums by Janet Redger</p>
                    <div className="album-song-cards-container album-song">
                        {
                            [1].map(ele => <SongCard 
                                key={ele} 
                                songImage='https://i.scdn.co/image/ab67616d00001e0206eac89920f156667cc3120e'
                                songTitle="Glance Out Of A Casement Window"
                                songDescription="2023 • single"
                            />)
                        }
                    </div>
                    <p className="artist-specialized-heading">Popular Singles and EPs by Janet Redger</p>
                    <div className="album-song-cards-container album-song">
                        {
                            [1,3,4,5,6].map(ele => <SongCard key={ele} 
                                songImage='https://i.scdn.co/image/ab67616d00001e0279a78cbb67c6a002d988a50f'
                                songTitle="Glance Out Of A Casement Window"
                                songDescription="2023 • single"
                            />)
                        }
                    </div>
                    <p className="artist-specialized-heading">Fans also like</p>
                    <div className="album-song-cards-container album-img">
                        {
                            [1,3,4,5,6].map(ele => <SongCard key={ele} 
                                songImage='https://i.scdn.co/image/ab67616d00001e02b86fb2dba75c11d91078c051'
                                songTitle="christian peterson -B"
                                songDescription="Artist"
                            />)
                        }
                    </div>
                    <div className="from-the-single-container">
                        <div className="from-the-single-img-container">
                            <img src="https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581" alt=""  className="from-the-single-img"/>
                        </div>
                        <div className="from-the-single-info-container">
                            <p>From the single</p>
                            <p className="from-the-single-desc">Glance Out A Casement Window</p>
                        </div>
                    </div>
                    <div className="artist-album-cards-containers from-the-single-below-card">
                        {
                            [1].map(ele => <ArtistAlbumCard key={ele} 
                                image={null}
                                title="Janet Redger"
                                
                            />)
                        }
                    
                    </div>
                    <div className="©-and-℗-container">
                        <p>© Janet Redger</p>
                        <p>℗ Janet Redger</p>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default ArtistAlbum
