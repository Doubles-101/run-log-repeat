import { useEffect, useState } from "react"
import "./MyProfile.css"
import { getMyProfile } from "../../services/getMyProfile.jsx"

export const MyProfile = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState({})


    useEffect(() => {
        /* if statement to remove an error of intitial render */
        if (currentUser.id > 0) {
            getMyProfile(currentUser.id).then((userArray) => {
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
            <button onClick={handleEdit}>Edit</button>}
        </div>
    )
}