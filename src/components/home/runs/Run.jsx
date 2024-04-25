import { Link, useParams } from "react-router-dom"
import { LikeButton } from "../../likebutton/LikeButton.jsx"
import "./Run.css"
import { useState, useEffect } from "react"
import { getRunDetails } from "../../../services/getHomeRunsRun.jsx"


export const Run = ({runObject, setLikeList}) => {
    const [runDetails, setRunDetails] = useState([])
    const [likeCounter, setLikeCounter] = useState(0)

    const { profileId } = useParams()

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
    <div className="bg-blue-800 text-white p-8 rounded-lg shadow-md m-4">
        <header>
            <h2 className="text-xl font-bold m-2">{runObject.date}</h2>
            <Link className="run-post-profileLink" to={`/profile/${runDetails[0]?.user?.id}`}>
                <h2 className="text-lg font-semibold mb-2">{runDetails[0]?.user?.username}</h2>
            </Link>
        </header>
        <div>
            <h3 className="text-lg mb-2">Distance: {runObject.distance}</h3>
            <h3 className="text-lg mb-2">Time: {runObject.time} mins</h3>
            <h3 className="text-lg mb-2">Location: {runObject.location}</h3>
        </div>
        <footer className="flex items-center justify-between">
            <LikeButton runObject={runObject} setLikeCounter={setLikeCounter} likeCounter={likeCounter} setLikeList={setLikeList} />
            <h3 className="text-lg">Number of Likes: {likeCounter}</h3>
        </footer>
    </div>
)
}