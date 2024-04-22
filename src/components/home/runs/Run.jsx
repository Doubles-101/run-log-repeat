import { Link } from "react-router-dom"
import { LikeButton } from "../../likebutton/LikeButton.jsx"
import "./Run.css"
import { useState, useEffect } from "react"
import { getRunDetails } from "../../../services/getHomeRunsRun.jsx"


export const Run = ({runObject}) => {
    const [runDetails, setRunDetails] = useState([])
    const [likeCounter, setLikeCounter] = useState(0)

    useEffect(() => {
        getRunDetails(runObject.id).then((runArray) => {
            setRunDetails(runArray)
        })
    }, [runObject])

    
    useEffect(() => {
        let totalLikes = 0
        for (const run of runDetails) {
            totalLikes += run.likes.length
        }
        setLikeCounter(totalLikes)
    }, [runDetails])

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
                <LikeButton runObject={runObject} setLikeCounter={setLikeCounter} likeCounter={likeCounter}/>
                <h3>Number of Likes: {likeCounter}</h3>
            </footer>
        </div>
    )
}