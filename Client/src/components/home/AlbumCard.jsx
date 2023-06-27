import {HeartOutlined, EllipsisOutlined} from "@ant-design/icons"
import "./albumcard.css"

const AlbumCard = () => {
    return(
        <div className="album-list-container">
            <div className="album-image-and-title">
                <img src="https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581" alt=""  className="album-image"/>
                <div className="album-title-container">
                    <p className="album-title-desc">glance out a casement window</p>
                    <p className="album-author">janet redger</p>
                </div>
            </div>
            <p className="album-name">glance out a casement window</p>
            <p className="album-date-added">19 hours ago</p>
            <div className="album-time-container">
                <HeartOutlined className="album-heart-icon"/>
                <p className="album-time">2:50</p>
                <EllipsisOutlined className="album-ellipsis-icon"/>
            </div>
            
        </div>
    )
}

export default AlbumCard