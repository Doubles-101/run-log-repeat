import { useEffect, useState } from "react"
import "./MyRuns.css"
import { getMyRunsList } from "../../services/getMyRuns.jsx"
import { Run } from "../home/runs/Run.jsx"

export const MyRuns = ({currentUser}) => {
    const [myRunsList, setMyRunsList] = useState([])

    useEffect(() => {
        getMyRunsList(currentUser.id).then((listArray) => {
            setMyRunsList(listArray)
        })
    }, [currentUser])

    return (
        <div className="myruns-container">
            <h2>My Runs</h2>
            {myRunsList.map((runObject) => {
                return (
                    /* Run module is located in home/runs/Run.jsx */
                    <Run runObject={runObject} key={runObject.id} />
                )
            })}
        </div>
    )
}