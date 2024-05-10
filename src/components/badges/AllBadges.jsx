import "./AllBadges.css"
import { TbRun } from "react-icons/tb"
import { PiPersonSimpleRun, PiPersonSimpleRunBold, PiPersonSimpleRunDuotone, PiPersonSimpleRunFill, PiPersonSimpleRunLight, PiPersonSimpleRunThin } from "react-icons/pi"
import { LiaRunningSolid } from "react-icons/lia"
import { FaRunning } from "react-icons/fa"

export const AllBadges = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen dark:bg-fourth">
            <div className="color text-first dark:text-first p-8">
                <h1 className="text-6xl font-bold font-sans text-center">List of Badges</h1>
            </div>
            <div className="max-w-4xl w-full bg-third dark:bg-first dark:text-fourth p-6 rounded-lg shadow-lg flex">
                <ul>
                    <li><div className="flex m-2"><TbRun className="mr-2"/>Complete Your First Run</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRun className="mr-2"/>3 Runs</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRunBold className="mr-2"/>10 Runs</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRunDuotone className="mr-2"/>50 Runs</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRunFill className="mr-2"/>100 Runs</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRun className="mr-2"/>Like a Post</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRun className="mr-2"/>Like 3 Posts</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRunLight className="mr-2"/>Run 1 Mile</div></li>
                    <li><div className="flex m-2"><PiPersonSimpleRunThin className="mr-2"/>Run 10 Miles</div></li>
                    <li><div className="flex m-2"><LiaRunningSolid className="mr-2"/>Run 50 Miles</div></li>
                    <li><div className="flex m-2"><FaRunning className="mr-2"/>Run 100 Miles</div></li>
                </ul>
            </div>
        </div>
    )
}