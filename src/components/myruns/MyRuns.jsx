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
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-first text-center p-8">
                <h1 className="text-6xl font-bold font-sans w-screen">My Runs</h1>
            </div>
            <div className="flex items-center justify-center h-full w-screen">
                {myRunsList.map((runObject) => {
                    return (
                        /* Run module is located in home/runs/Run.jsx */
                        <Run runObject={runObject} key={runObject.id} />
                    )
                })}
            </div>
        </div>
    )
}