import "./Home.css"
import { AllRuns } from "./runs/AllRuns.jsx"

export const Home = () => {
    return (
        <>
        <div className="bg-aliceblue-800 text-white p-8">
            <h1 className="text-6xl font-bold font-sans text-center">Home</h1>
        </div>

        <AllRuns />
        </>
    )
}