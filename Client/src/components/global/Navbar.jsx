import './navbar.css'
import { HomeFilled, SearchOutlined, AppstoreAddOutlined, GlobalOutlined, PlusOutlined } from '@ant-design/icons'
import { IconButton } from '@mui/material'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navigation">
                <ul className="nav-list">
                    <li className="nav-items">
                        <HomeFilled style={{
                            fontSize: 20
                        }} />
                        <span>Home</span>
                    </li>
                    <li className="nav-items">
                        <SearchOutlined style={{
                            fontSize: 20
                        }} />
                        <span>Search</span>
                    </li>
                </ul>
            </div>
            <div className="your-library">
                <div className="library-top">
                    <AppstoreAddOutlined style={{
                        fontSize: 20
                    }} />
                    <span>
                        Your Library
                    </span>
                    <IconButton
                        style={{
                            marginLeft: "auto"
                        }}
                    >
                        <PlusOutlined style={{ color: "#fff" }} />
                    </IconButton>
                </div>
                <div className="create-playlist-container">
                    <div className="create-playlist">
                        <p className="playlist-head">
                            Create your fist playlist
                        </p>
                        <p className="playlist-desc">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <button>
                            create playlist
                        </button>
                    </div>
                    <div className="find-podcast">
                        <p className="podcast-head">
                            Find some podcast
                        </p>
                        <p className="podcast-desc">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <button>
                            Browse podcast
                        </button>
                    </div>
                </div>
                <div className="navbar-footer">
                    <div className="nav-footer-links">
                        <p className="nav-footer-link">Lorem   </p>
                        <p className="nav-footer-link">ipsum</p>
                        <p className="nav-footer-link">dolor</p>
                        <p className="nav-footer-link">consectetur</p>
                        <p className="nav-footer-link">voluptas</p>
                    </div>
                    <button className="nav-footer-button">
                        <GlobalOutlined />
                        English
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar