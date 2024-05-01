import { useEffect, useState } from "react"
import "./Likes.css"
import { getLikes } from "../../services/getLikes.jsx"
import { Run } from "../home/runs/Run.jsx"

export const Likes = ({currentUser}) => {
    const [likeList, setLikeList] = useState([])

    useEffect(() => {
        getLikes(currentUser.id).then((likeArray) => {
            setLikeList(likeArray)
        })
    }, [currentUser])

    return (
        <div className="likes-container">
            <div className="text-center text-first p-8">
                <h1 className="text-6xl font-bold font-sans text-center">Liked Runs </h1>
            </div>
            <div className="flex items-center justify-center h-full w-screen">
                {likeList.map((likedRun) => {
                    return (
                        <Run runObject={likedRun.run} key={likedRun.id} setLikeList={setLikeList} />
                    )
                })}
            </div>
        </div>
    )
}