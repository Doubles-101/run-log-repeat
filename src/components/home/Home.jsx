import "./Home.css"
import { AllRuns } from "./runs/AllRuns.jsx"

export const Home = () => {
    return (
        <>
        <div className="text-blue-400 p-8">
            <h1 className="text-6xl font-bold underline font-sans text-center">Home</h1>
        </div>

        <AllRuns />
        </>
    )
}