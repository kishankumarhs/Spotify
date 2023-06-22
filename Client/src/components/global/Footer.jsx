import './footer.css'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons"
const Footer = () => {
    return (
        <footer>
            <div className="links-container">
                <ul>
                    <p className="list-head">Company</p>
                    <li className="list-items">About</li>
                    <li className="list-items">Jobs</li>
                    <li className="list-items">For the Record</li>
                </ul>
                <ul>
                    <p className="list-head">Communities</p>

                    <li className="list-items">For Artists</li>
                    <li className="list-items">Developers</li>
                    <li className="list-items">Advertising</li>
                    <li className="list-items">Investors</li>
                    <li className="list-items">Vendors</li>
                    <li className="list-items">Spotify for Work</li>
                </ul>
                <ul>
                    <p className="list-head">Useful links</p>
                    <li className="list-items">Support</li>
                    <li className="list-items">Free Mobile App</li>
                </ul>
                <div className="social">
                    <div className="icons">
                        <InstagramOutlined />
                    </div>
                    <div className="icons">
                        <TwitterOutlined />
                    </div>
                    <div className="icons">
                        <FacebookOutlined />
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Spotify Clone
            </div>
        </footer>
    )
}

export default Footer