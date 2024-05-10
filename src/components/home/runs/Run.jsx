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
        <div className="w-1/4 m-4 shadow-lg bg-fourth dark:bg-first">
            <div className="bg-first dark:bg-fourth text-third rounded-lg m-4">
                <header>
                <div className="flex items-center justify-center bg-white dark:bg-fourth">
                    <img
                        src={runDetails[0]?.user?.profileImg}
                        alt="Profile Image"
                        className="w-3/4 h-1/2 rounded-full"
                    />
                </div>
                    <h2 className="text-xl ml-4 font-bold m-2">{runObject.date}</h2>
                    <Link className="run-post-profileLink" to={`/profile/${runDetails[0]?.user?.id}`}>
                        <h2 className="text-lg ml-4 font-semibold mb-2 hover:text-fourth">{runDetails[0]?.user?.username}</h2>
                    </Link>
                </header>
                <div>
                    <h3 className="text-lg ml-4 mb-2">Distance: {runObject.distance}</h3>
                    <h3 className="text-lg ml-4 mb-2">Time: {runObject.time} mins</h3>
                    <h3 className="text-lg ml-4 mb-2">Location: {runObject.location}</h3>
                </div>
                <footer className="flex items-center justify-left ml-4 ">
                    <LikeButton runObject={runObject} setLikeCounter={setLikeCounter} likeCounter={likeCounter} setLikeList={setLikeList} />
                    <h3 className="text-lg m-4">Number of Likes: {likeCounter}</h3>
                </footer>
            </div>
        </div>
    )
}