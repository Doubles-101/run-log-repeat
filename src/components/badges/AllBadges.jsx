import "./AllBadges.css"

export const AllBadges = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="color text-first p-8">
                <h1 className="text-6xl font-bold font-sans text-center">List of Badges</h1>
            </div>
            <div className="max-w-4xl w-full bg-third p-6 rounded-lg shadow-lg flex">
                <ul>
                    <li>Complete Your First Run</li>
                    <li>3 Runs</li>
                    <li>10 Runs</li>
                    <li>50 Runs</li>
                    <li>100 Runs</li>
                    <li>Like a Post</li>
                    <li>Like 3 Posts</li>
                    <li>Run 1 Mile</li>
                    <li>Run 10 Miles</li>
                    <li>Run 50 Miles</li>
                    <li>Run 100 Miles</li>
                </ul>
            </div>
        </div>
    )
}