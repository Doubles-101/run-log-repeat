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
            {likeList.map((likedRun) => {
                return (
                    <Run runObject={likedRun.run} key={likedRun.id}/>
                )
            })}
        </div>
    )
}