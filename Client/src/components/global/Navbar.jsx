import './navbar.css'
import { HomeFilled, SearchOutlined } from '@ant-design/icons'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navigation">
                <ul className="nav-list">
                    <li className="nav-items">
                        <HomeFilled size={30} />
                        <span>Home</span>
                    </li>
                    <li className="nav-items">
                        <SearchOutlined />
                        <span>Search</span>
                    </li>
                </ul>
            </div>
            <div className="your-library">

            </div>

        </div>
    )
}

export default Navbar