import { Link } from "react-router-dom"
import { LikeButton } from "../../likebutton/LikeButton.jsx"


export const Run = ({runObject}) => {
    return (
        <div className="run-post">
            <header>
                <Link to={`rundetails/${runObject.id}`}>
                    <h2>{runObject.date}</h2>
                </Link>
            </header>
            <div>
                <h3>Distance : {runObject.distance}</h3>
                <h3>Time : {runObject.time} mins</h3>
                <h3>Location : {runObject.location}</h3>
            </div>
            <footer>
                <LikeButton runObject={runObject} />
            </footer>
        </div>
    )
}