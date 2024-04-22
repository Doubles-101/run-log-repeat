import { useEffect, useState } from "react"
import "./AddRun.css"
import { getPostCreatedRun, getRunTypes } from "../../services/getAddRun.jsx"

export const AddRun = ({currentUser}) => {
    const [currentAddRun, setCurrentAddRun] = useState({})
    const [runTypes, setRunTypes] = useState([])
    const [userTopicChoice, setUserTopicChoice] = useState(0)

    useEffect(() => {
        setCurrentAddRun({userId: currentUser.id, runTypeId: userTopicChoice})
    }, [currentUser, userTopicChoice])

    useEffect(() => {
        getRunTypes().then((runTypeArray) => {
            setRunTypes(runTypeArray)
        })
    }, [currentUser])


    const handleTopicChoice = (event) => {
        setUserTopicChoice(event)
    }

    /* Needs to validate all required fields are filled in */
    /* Needs to Navigate viewer to home */
    const handleSaveClick = (event) => {
        event.preventDefault()
        getPostCreatedRun(currentAddRun)
        console.log("Posted")
    }

    return (
        <form>
            <fieldset>
                <select id="topic" onChange={(event) => {handleTopicChoice(parseInt(event.target.value))}}>
                    <option value={0}>Please Select Run Type</option>
                    {runTypes.map((runOption) => {
                        return (
                            <option key={runOption.id} value={runOption.id}>{runOption.type}</option>
                        )
                    })}
                </select>
            </fieldset>
            <fieldset required>
                <input 
                    type="text"
                    required
                    placeholder="Insert Location"
                    value={currentAddRun.location}
                    onChange={() => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.location = event.target.value
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Location
            </fieldset>
            <fieldset>
            <input 
                    type="number"
                    required
                    placeholder="Insert Distance"
                    value={currentAddRun.distance}
                    onChange={() => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.distance = event.target.value
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Distance
            </fieldset>
            <fieldset>
            <input 
                    type="number"
                    required
                    placeholder="Insert Time"
                    value={currentAddRun.time}
                    onChange={() => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.time = event.target.value
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Time
            </fieldset>
            <fieldset>
            <input 
                    type="date"
                    required
                    placeholder="Insert Date"
                    value={currentAddRun.date}
                    onChange={() => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.date = event.target.value
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Date
            </fieldset>
            <fieldset>
            <input 
                    type="number"
                    required
                    placeholder="Insert Temperature"
                    value={currentAddRun.temperature}
                    onChange={() => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.temperature = event.target.value
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Temperature
            </fieldset>
            <fieldset>
            <input 
                    type="checkbox"
                    placeholder="Insert Distance"
                    value={currentAddRun.public}
                    onChange={(event) => {
                        const currentAddRunCopy = {...currentAddRun}
                        currentAddRunCopy.public = event.target.checked
                        setCurrentAddRun(currentAddRunCopy)
                    }}
                />
                Make Public
            </fieldset>
            
            <button onClick={handleSaveClick}>Save</button>
        </form>
    )
}