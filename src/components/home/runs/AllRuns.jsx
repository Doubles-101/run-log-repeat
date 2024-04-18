import { useEffect, useState } from "react"
import { getAllRuns } from "../../../services/getAllRuns.jsx"
import { Link } from "react-router-dom"
import { Run } from "./Run.jsx"

export const AllRuns = () => {
    const [runs, setRuns] = useState([])

    useEffect(() => {
        getAllRuns().then((runArray) => {
            setRuns(runArray)
        })
    }, [])
    return (
        <div className="allruns-container">
            <h2>All Runs</h2>
            {runs.map((runObject) => {
                return (
                    <Link to={`allruns/${runObject.id}`}>
                        <Run className="run-post" runObject={runObject} key={runObject.id}/>
                    </Link>
                )
            })}
        </div>
    )
}