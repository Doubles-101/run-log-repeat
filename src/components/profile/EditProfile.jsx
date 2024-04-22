import { useEffect, useState } from "react"
import { getEditProfile, getPutProfile } from "../../services/getProfile.jsx"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({currentUser}) => {
    const [userInfo, setUserInfo] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser.id > 0) {
            getEditProfile(currentUser.id).then((userObj) => {
                setUserInfo(userObj)
            })
        }
    }, [currentUser])

    const handleSave = () => {
        console.log("Saved!")
        getPutProfile(userInfo)
        navigate(`/`)
    }

    return (
        <form className="editprofile-container">
            <header><h2>Edit Profile</h2></header>
            <div className="myprofile-item">Username:</div>
            <input 
                type="text"
                value={userInfo.username}
                onChange={() => {
                    const profileCopy = {...userInfo}
                    profileCopy.username = event.target.value
                    setUserInfo(profileCopy)
                }}
            />
            <div className="myprofile-item">Email:</div>
            <input 
                type="text"
                value={userInfo.email}
                onChange={() => {
                    const profileCopy = {...userInfo}
                    profileCopy.email = event.target.value
                    setUserInfo(profileCopy)
                }}
            />
            
            <footer><button onClick={handleSave}>Save</button></footer>
        </form>
    )
}