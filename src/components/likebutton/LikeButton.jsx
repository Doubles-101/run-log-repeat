import { useEffect, useState } from "react"
import "./LikeButton.css"
import { getDeleteLike, getLikeButton, getPostLike } from "../../services/getLikeButton.jsx"
import { useNavigate, useParams } from "react-router-dom"
import { getLikes } from "../../services/getLikes.jsx"

export const LikeButton = ({runObject, setLikeCounter, likeCounter, setLikeList}) => {
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
        ).then(
            getLikes(currentUser.id).then((likeArray) => {
                setLikeList(likeArray)
            })
        )
    }

    const handleDetails = () => {
        console.log("edited")
        navigate(`/rundetails/${runObject.id}`)
    }

    return (
        <>

        {/* If the post has not been Liked display this */}
        {!liked && 
        <button className="bg-fourth text-white px-4 py-2 m-2 transition-all 
        duration-300 hover:bg-blue-600 hover:shadow-lg" onClick={handleLike}>Like</button>}

        {/* If the post has been Liked display this */}
        {liked && 
        <button className="bg-second text-white px-4 py-2 m-2 transition-all 
        duration-300 hover:bg-blue-600 hover:shadow-lg" onClick={handleUnlike}>Unlike</button>}
            
       
        <button className="bg-fourth text-white px-4 py-2 m-2 transition-all 
        duration-300 hover:bg-blue-600 hover:shadow-lg" onClick={handleDetails}>Details</button>
        
        </>
    )
}