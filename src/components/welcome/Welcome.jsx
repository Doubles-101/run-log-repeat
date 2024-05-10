import { useNavigate } from "react-router-dom"
import "./Welcome.css"
import { useEffect, useState } from "react"
import { getWelcome } from "../../services/getWelcome.jsx"


export const Welcome = ({currentUser}) => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        getWelcome(currentUser.id).then((userArr) => {
            setUserInfo(userArr)
        })
    }, [currentUser] ,2000)

    const navigate = useNavigate()

    const addRunClick = () => {
        navigate("/addrun")
    }

    const allRunsClick = () => {
        navigate("/home")
    }

    const myBadgesClick = () => {
        navigate("/mybadges")
    }

    const socialClick = () => {
        navigate(`/profile/${currentUser.id}`)
    }

    return (
       <div className="flex flex-col justify-center align-center">
            <div className="flex bg-first box">
                <div className="text-white text-6xl text-sans font-bold mx-auto my-auto">Welcome!! {userInfo[0]?.username}</div>
                <button className="text-white text-5xl text-sans font-bold mx-auto my-auto bg-fourth text-white px-4 py-2 m-2 transition-all 
                    duration-300 hover:bg-blue-600 hover:shadow-lg hover:bg-second"
                    onClick={addRunClick}
                >Add Run</button>
            </div>
            <div className="flex bg-white box">
                <div className="text-first text-4xl w-1/3 text-sans font-bold flex flex-col text-center mt-20 p-10">Create
                    <h1>Post your running journy or see other's posts.</h1>
                    <button className="bg-first text-white px-4 py-2 m-2 transition-all 
                    duration-300 hover:bg-blue-600 hover:shadow-lg hover:bg-fourth"
                    onClick={allRunsClick}    
                >All Runs</button>
                </div>
                <div className="text-first text-4xl w-1/3 text-sans font-bold flex flex-col text-center mt-20 p-10">Badges
                    <h1>The more you run, the more badges you earn.</h1>
                    <button className="bg-first text-white px-4 py-2 m-2 transition-all 
                    duration-300 hover:bg-blue-600 hover:shadow-lg hover:bg-fourth"
                    onClick={myBadgesClick}    
                >My Badges</button>
                </div>
                <div className="text-first text-4xl w-1/3 text-sans font-bold flex flex-col text-center mt-20 p-10">Social
                    <h1>Edit your profile and see what others have.</h1>
                    <button className="bg-first text-white px-4 py-2 m-2 transition-all 
                    duration-300 hover:bg-blue-600 hover:shadow-lg hover:bg-fourth"
                    onClick={socialClick}    
                >My Profile</button>
                </div>
            </div>
       </div>

    )
}