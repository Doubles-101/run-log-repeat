import "./Home.css"
import { AllRuns } from "./runs/AllRuns.jsx"

export const Home = () => {
    return (
        <>
        <div className="text-first p-8 dark:bg-fourth">
            <h1 className="text-6xl font-bold font-sans text-center">All Posts</h1>
        </div>

        <AllRuns />
        </>
    )
}