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
            <div className="color p-8">
                <h1 className="text-6xl font-bold font-sans text-center">My Runs</h1>
            </div>
            {myRunsList.map((runObject) => {
                return (
                    /* Run module is located in home/runs/Run.jsx */
                    <Run runObject={runObject} key={runObject.id} />
                )
            })}
        </div>
    )
}