import { useEffect, useState } from "react"
import "./Profile.css"
import { getMyProfile, getUserBadgeCount } from "../../services/getProfile.jsx"
import { Link, useNavigate, useParams } from "react-router-dom"

export const Profile = ({currentUser}) => {
    const [userProfile, setUserProfile] = useState({})
    const [userBadgeCount, setUserBadgeCount] = useState(0)

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

    useEffect(() => {
      getUserBadgeCount(profileId).then((badgeArr) => {
        let badgeString = ""
        for (const badge of badgeArr) {
          badgeString += "★"
        }

        setUserBadgeCount(badgeString)
      })
    }, [currentUser])

    const handleEdit = () => {
        console.log("Edit") 
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen dark:bg-fourth">
          <div className="max-w-4xl w-full bg-third dark:bg-first p-6 rounded-lg shadow-lg flex">
            <div className="w-1/3">
              <img
                src={userProfile.profileImg}
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
              <div className="myprofile-item">
                {userBadgeCount}
              </div>
              {userProfile.id === currentUser.id && (
                <Link to={`/editprofile`} className="mt-4">
                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 bg-first dark:bg-fourth text-white rounded hover:bg-fourth dark:hover:bg-second"
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