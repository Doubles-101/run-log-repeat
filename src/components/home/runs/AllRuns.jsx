import { useEffect, useState } from "react"
import { getAllRuns } from "../../../services/getAllRuns.jsx"
import { Run } from "./Run.jsx"

export const AllRuns = () => {
    const [runs, setRuns] = useState([])

    useEffect(() => {
        getAllRuns().then((runArray) => {
            setRuns(runArray)
        })
    }, [])
    return (
        <div className="allruns-container dark:bg-fourth" key={runs.id}>
            {runs.map((runObject) => {
                return (
                    <Run className="" runObject={runObject} key={runObject.id}/>
                )
            })}
        </div>
    )
}