import { useEffect, useState } from "react"
import "./LikeButton.css"
import { getDeleteLike, getLikeButton, getPostLike } from "../../services/getLikeButton.jsx"
import { useNavigate, useParams } from "react-router-dom"

export const LikeButton = ({runObject, setLikeCounter, likeCounter}) => {
    const [currentUser, setCurrentUser] = useState({}) 
    const [userLikes, setUserLikes] = useState([])
    const [liked, setLiked] = useState(false)
    const [currentLike, setCurrentLike] = useState([])

    const navigate = useNavigate()
    const { editRunId } = useParams()

    useEffect(() => {
        const localHoneyuser = localStorage.getItem("honey_user")
        const honeyUserObj = JSON.parse(localHoneyuser)

        setCurrentUser(honeyUserObj)
    }, [])

    /* This Searches through all the runs the user has liked 
    sees if the current run has been like
    If liked, return True
    If not liked, return False
     */
    useEffect(() => {
        setLiked( userLikes.some(like => currentUser.id === like.userId))
    }, [userLikes])
    

    /* This Grabs all the runs the user has liked and stores it in state */
    useEffect(() => {
        if(currentUser.id > 0) {
            getLikeButton(currentUser.id, runObject.id).then((likeArray) => {
                setUserLikes(likeArray)
            })
        }
    }, [currentUser, runObject, liked])

    useEffect(() => {
        setCurrentLike(
            userLikes.find((like) =>
                currentUser.id === like.userId
            )
        )
    }, [userLikes, liked, runObject, likeCounter])


    const handleLike = () => {
        console.log("liked")
        getPostLike(currentUser.id, runObject.id).then(
            setLiked(!liked)
            ,setLikeCounter(likeCounter + 1)
        ).then(
            setCurrentLike(
            userLikes.find((like) =>
                currentUser.id === like.userId
            )
        ))
    }

    const handleUnlike = () => {
        console.log("Unliked")
        getDeleteLike(currentLike?.id).then(
            setLiked(!liked)
            ,setLikeCounter(likeCounter - 1)
            ,setCurrentLike(
                userLikes.find((like) =>
                    currentUser.id === like.userId
                )
            )
        )
    }

    const handleEdit = () => {
        console.log("edited")
        navigate(`/editrun/${editRunId}`)
    }

    return (
        <>

        {/* If the post has not been Liked display this */}
        {!liked && 
        <button onClick={handleLike}>Like</button>}

        {/* If the post has been Liked display this */}
        {liked && 
        <button onClick={handleUnlike}>Unlike</button>}
            
        {/* If the user is the creator of the Run display this */}
        {currentUser?.id === runObject.userId && 
        <button onClick={handleEdit}>Edit</button>}
        
        </>
    )
}