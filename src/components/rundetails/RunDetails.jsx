import { useNavigate, useParams } from "react-router-dom"
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
    }

    const handleDelete = () => {
        console.log("Delete!")
        getDeleteRun(currentRun.id).then(
            navigate(`/myruns`)
        )
    }
    
    
    return (
        <div className="rundetails-container">
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
                <button onClick={handleEdit}>Edit</button>}

                {currentUser.id === currentRun.user?.id &&
                <button className="btn-warning" onClick={handleDelete}>Delete</button>}
            </footer>
        </div>
    )
}