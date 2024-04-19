

export const Run = ({runObject}) => {
    return (
        <div className="run-post">
            <header><h2>{runObject.date}</h2></header>
            <div>
                <h3>Distance : {runObject.distance}</h3>
                <h3>Time : {runObject.time} mins</h3>
                <h3>Location : {runObject.location}</h3>
            </div>
            <footer>
                <button>Like</button>
            </footer>
        </div>
    )
}