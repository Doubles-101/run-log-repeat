import { useEffect, useState } from "react"
import { getEditProfile, getPutProfile } from "../../services/getProfile.jsx"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({currentUser}) => {
    const [userInfo, setUserInfo] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        /* if statement to prevent initial render error */
        if(currentUser.id > 0) {
            getEditProfile(currentUser.id).then((userObj) => {
                setUserInfo(userObj)
            })
        }
    }, [currentUser])

    const handleSave = () => {
        console.log("Saved!")
        getPutProfile(userInfo)
        navigate(`/profile/${currentUser.id}`)
    }

    return (
        <div className="width-100 h-screen mx-auto p4">
            <form className="w-1/2 h-auto mx-auto p4">
                <header>
                <div className="color p-4">
                    <h1 className="text-4xl font-bold font-sans text-center">Edit Run</h1>
                </div>
                </header>
                <div className="">Username:</div>
                <input 
                    className="rounded-lg p-2 m-2"
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
                    className="rounded-lg p-2 m-2"
                    type="text"
                    value={userInfo.email}
                    onChange={() => {
                        const profileCopy = {...userInfo}
                        profileCopy.email = event.target.value
                        setUserInfo(profileCopy)
                    }}
                />
                <div className="myprofile-item">Profile Image Url:</div>
                <input 
                    className="rounded-lg p-2 m-2"
                    type="text"
                    value={userInfo.profileImg}
                    onChange={() => {
                        const profileCopy = {...userInfo}
                        profileCopy.profileImg = event.target.value
                        setUserInfo(profileCopy)
                    }}
                />
                
                <footer>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 m-2 mb-8 transition-all 
                        duration-300 hover:bg-blue-600 hover:shadow-lg "
                        onClick={handleSave}>Save
                    </button>
                </footer>
            </form>
        </div>
    )
}