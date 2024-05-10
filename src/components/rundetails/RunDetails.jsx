import { Link, useNavigate, useParams } from "react-router-dom"
import "./RunDetails.css"
import { useEffect, useState } from "react"
import { getCurrentRunDetails, getDeleteRun } from "../../services/getRunDetails.jsx"

export const RunDetails = ({currentUser}) => {
    const [currentRun, setCurrentRun] = useState({})

    const { runDetailsId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentRunDetails(runDetailsId).then((runObj) => {
            setCurrentRun(runObj)
        })
    }, [runDetailsId, currentUser])

    const handleEdit = () => {
        console.log("Edit!")
        navigate(`/editrun/${currentRun.id}`)
    }

    const handleDelete = () => {
        console.log("Delete!")
        getDeleteRun(currentRun.id).then(
            navigate(`/myruns`)
        )
    }
    
    
    return (
        <div className="flex flex-col items-center justify-center h-screen dark:bg-fourth">
            <div className="max-w-4xl w-full bg-third dark:bg-first p-6 rounded-lg shadow-lg">
                <header>
                    <h1>{currentRun.user?.username}</h1>
                    <h2>{currentRun.runType?.type}</h2>
                    <h2>{currentRun.date}</h2>
                    <h2>{currentRun.time} Minutes</h2>
                </header>
                <div>
                    <h3>Distance  :  {currentRun.distance} Miles</h3>
                    <h3>Temperature  :  {currentRun.temperature}F</h3>
                    <h3>Location  :  {currentRun.location}</h3>
                </div>
                <footer>
                    {currentUser.id === currentRun.user?.id &&
                    <button 
                        onClick={handleEdit}
                        className="px-4 py-2 bg-first text-white rounded hover:bg-fourth dark:bg-fourth dark:hover:bg-second"
                    >Edit</button>}

                    {currentUser.id === currentRun.user?.id &&
                    <button 
                        onClick={handleDelete}
                        className="px-4 py-2 ml-2 bg-second text-white rounded hover:bg-fourth"    
                    >Delete</button>}
                </footer>
            </div>
        </div>
    )
}