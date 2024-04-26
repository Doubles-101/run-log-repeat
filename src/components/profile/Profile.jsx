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
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="max-w-4xl w-full bg-gray-100 p-6 rounded-lg shadow-lg flex">
            <div className="w-1/3">
              {/* Adjust the src attribute with your image URL */}
              <img
                src="https://images.vexels.com/media/users/3/263225/isolated/preview/846c7cd4a40a52e16386b3cc5cea63f6-marathon-sport-running-shoe.png"
                alt="Profile Image"
                className="w-3/4 h-auto rounded-full"
              />
            </div>
            <div className="w-2/3 px-12">
              <div className="myprofile-item">{userProfile.username}</div>
              <div className="myprofile-item">{userProfile.email}</div>
              <div className="myprofile-item">
                Number of Runs: {userProfile.runs?.length}
              </div>
              {userProfile.id === currentUser.id && (
                <Link to={`/editprofile`} className="mt-4">
                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )
      
      
}