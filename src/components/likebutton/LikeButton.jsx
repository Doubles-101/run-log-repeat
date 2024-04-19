import { useEffect, useState } from "react"
import "./LikeButton.css"
import { getLikeButton } from "../../services/getLikeButton.jsx"
import { useNavigate, useParams } from "react-router-dom"

export const LikeButton = ({runObject}) => {
    const [currentUser, setCurrentUser] = useState({}) 
    const [userLikes, setUserLikes] = useState([])
    const [liked, setLiked] = useState(false)

    const navigate = useNavigate()
    const { editRunId } = useParams()

    useEffect(() => {
        const localHoneyuser = localStorage.getItem("honey_user")
        const honeyUserObj = JSON.parse(localHoneyuser)

        setCurrentUser(honeyUserObj)
    }, [])

    /* This searches through all the runs the user has liked 
    sees if the current run has been like
    If liked, return True
    If not liked, return False
     */
    useEffect(() => {
        setLiked( userLikes.some(like => currentUser.id === like.userId))
    }, [userLikes])
    

    useEffect(() => {
        if(currentUser.id > 0) {
            getLikeButton(currentUser.id, runObject.id).then((likeArray) => {
                setUserLikes(likeArray)
            })
        }
    }, [currentUser, runObject])


    const handleLike = () => {
        console.log("liked")
    }

    const handleUnlike = () => {
        console.log("Unliked")
    }

    const handleEdit = () => {
        console.log("edited")
        navigate(`/editrun/${editRunId}`)
    }

    return (
        <>
        {/* If the user is the creator of the Run display this */}
        {currentUser?.id === runObject.userId && 
        <button onClick={handleEdit}>Edit</button>}

        {/* If the post has not been Liked display this */}
        {!liked && 
        <button onClick={handleLike}>Like</button>}

        {/* If the post has been Liked display this */}
        {liked && 
        <button onClick={handleUnlike}>Unlike</button>}
            
        </>
    )
}