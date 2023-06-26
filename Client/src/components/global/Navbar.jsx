import "./Navbar.css"
import {HomeFilled, SearchOutlined,AppstoreAddOutlined,PlusOutlined,GlobalOutlined} from "@ant-design/icons"
import {IconButton} from "@mui/material"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navigation">
                <ul className="nav-list">
                    <li className="nav-items">
                        <HomeFilled />
                        <span>Home</span>
                    </li>
                    <li className="nav-items search">
                        <SearchOutlined />
                        <span>Search</span>
                    </li>
                </ul>
            </div>
            <div className="your-library-container">
                <div className="library-top-section ">
                    
                        <AppstoreAddOutlined style={
                            {fontSize:"20"}
                        }/>
                    <span>your library</span>
                    
                    
                        <IconButton style={{
                            marginLeft: "auto"
                        }}>
                            <PlusOutlined style={{ color: "#fff" }} />
                        </IconButton>
                    
                    
                </div>
                <div className="library-middle-setion">
                    <div className="create-playlist-container">
                        <p className="playlist-head-text">Create your first playlist</p>
                        <p className="playlist-desc">It's easy, we'll help you</p>
                        <button>Create playlist</button>
                    </div>
                    <div className="create-podcast-container">
                        <p className="podcast-head">Let's find some podcasts to follow</p>
                        <p className="podcast-desc">We'll keep you updated on new episodes</p>
                        <button>Browse podcasts</button>
                    </div>
                </div>
                <div className="navbar-footer-setion">
                <div className="nav-footer-links">
                    <p className="nav-link">legal</p>
                    <p className="nav-link">privacy center</p>
                    <p className="nav-link">privacy policy</p>
                    <p className="nav-link">cookies</p>
                    <p className="nav-link">about ads</p>
                    <p className="nav-link">accessibility</p>
                </div>
                
                <button>
                    <GlobalOutlined/>
                    english
                    </button>
            </div>
            </div>
            
            
        </div>
    )
}

export default Navbar