import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCurrentEditRunDetails, getPutEditedRun } from "../../services/getRunDetails.jsx"

export const EditRun = ({currentUser}) => {
    const [currentEditRun, setCurrentEditRun] = useState({})

    const { editRunId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCurrentEditRunDetails(editRunId).then((runObj) => {
            setCurrentEditRun(runObj)
        })
    }, [editRunId, currentUser])

    const handleSave = () => {
        console.log("Saved!")
        getPutEditedRun(currentEditRun).then(
            navigate("/myruns")
        )
    }

    return (

            <form className="editrun-container">
                <header><h2>Edit Run</h2></header>
                <div className="editrun-item">Distance:</div>
                <input 
                    type="text"
                    value={currentEditRun.distance}
                    onChange={() => {
                        const editRunCopy = {...currentEditRun}
                        editRunCopy.distance = event.target.value
                        setCurrentEditRun(editRunCopy)
                    }}
                />
                <div className="editrun-item">Location:</div>
                <input 
                    type="text"
                    value={currentEditRun.location}
                    onChange={() => {
                        const editRunCopy = {...currentEditRun}
                        editRunCopy.location = event.target.value
                        setCurrentEditRun(editRunCopy)
                    }}
                />
                <div className="editrun-item">Time (Minutes):</div>
                <input 
                    type="number"
                    value={currentEditRun.time}
                    onChange={() => {
                        const editRunCopy = {...currentEditRun}
                        editRunCopy.time = event.target.value
                        setCurrentEditRun(editRunCopy)
                    }}
                />
                <div className="editrun-item">Temperature (F):</div>
                <input 
                    type="number"
                    value={currentEditRun.temperature}
                    onChange={() => {
                        const editRunCopy = {...currentEditRun}
                        editRunCopy.temperature = event.target.value
                        setCurrentEditRun(editRunCopy)
                    }}
                />
                <footer>
                    <button onClick={handleSave}>Save</button>
                </footer>
            </form>
        
    )
}