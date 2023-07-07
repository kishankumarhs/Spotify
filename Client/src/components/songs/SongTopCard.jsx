import React from 'react'
import { Link } from "react-router-dom"
import "./songtopcard.css"

const SongTopCard = ({ image, type, name, description, songs, date, authorImage, author, timing }) => {
  return (
    <div className="playlist-head-container">
                <div className="song-details-container">
            <div className="playlist-image">
                <img src={image || "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" }alt="" />    
            </div>
            <div className="play-list-info">
                <p className="playlist-text">{type || "Playlist"}</p>
                <h1 className="playlist-head">{name || "Peaceful Piano"}</h1>
                <p className="palylist-desc">{ description || null}</p>
                
                <div className="likes-and-songs-container">
                    <div className="spotify-logo">
                        <img src={authorImage || "https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"} alt="" />
                        <Link to={"/"} className="playlist-spotyfy-text">{author || "Spotify"} <span className="span-dot">
                                •</span></Link>
                    </div>
                    <p className="playlist-likes">{songs || "7,078,971 likes"} <span className="span-dot">
                                •</span></p>
                    <p className="playlist-no-of-songs">{date || "310 songs"}<span className="span-dot">
                                ,</span></p>
                    <p className="playlist-no-of-hours">{timing || "about 11 hr"}</p>


                </div>
            </div>  
                </div>
            </div>
  )
}

export default SongTopCard