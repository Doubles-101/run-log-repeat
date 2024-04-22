import { useEffect, useState } from "react"
import "./Profile.css"
import { getMyProfile } from "../../services/getProfile.jsx"
import { Link, useNavigate, useParams } from "react-router-dom"

export const Profile = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState({})

    const { profileId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser.id === profileId) {
            getMyProfile(currentUser.id).then((userArray) => {
               setUserProfile(userArray)
            })
        } else {
            getMyProfile(profileId).then((userArray) => {
                setUserProfile(userArray)
             })
        }
    }, [currentUser])

    const handleEdit = () => {
        console.log("Edit") 
    }

    return (
        <div className="myprofile-container">
            <div className="myprofile-item">{userProfile.username}</div>
            <div className="myprofile-item">{userProfile.email}</div>
            <div className="myprofile-item">
                Number of Runs :
                {userProfile.runs?.length}
            </div>
            {userProfile.id === currentUser.id &&
            <Link to={`/editprofile`}>
                <button onClick={handleEdit}>Edit</button>
            </Link>
            }
        </div>
    )
}