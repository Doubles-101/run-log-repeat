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
        <div className="w-100 mx-auto p-4 dark:bg-fourth">
            <form className="w-1/2 h-auto mx-auto p4 bg-third dark:bg-first">
                <div className="">Distance:</div>
                <input 
                    className="rounded-lg p-2 m-2"
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
                    className="rounded-lg p-2 m-2"
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
                    className="rounded-lg p-2 m-2"
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
                    className="rounded-lg p-2 m-2"
                    type="number"
                    value={currentEditRun.temperature}
                    onChange={() => {
                        const editRunCopy = {...currentEditRun}
                        editRunCopy.temperature = event.target.value
                        setCurrentEditRun(editRunCopy)
                    }}
                />
                <footer>
                    <button 
                        className="bg-first dark:bg-fourth text-white px-4 py-2 m-2 mb-8 transition-all 
                        duration-300 hover:bg-fourth hover:shadow-lg dark:hover:bg-second dark:hover:shadow-lg"
                        onClick={handleSave}>
                    Save</button>
                </footer>
            </form>
        </div>
    )
}