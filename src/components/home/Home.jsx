import "./Home.css"
import { AllRuns } from "./runs/AllRuns.jsx"

export const Home = () => {
    return (
        <>
        <div className="color p-8">
            <h1 className="text-6xl font-bold font-sans text-center">All Runs</h1>
        </div>

        <AllRuns />
        </>
    )
}