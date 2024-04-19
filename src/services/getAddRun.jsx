export const getRunTypes = () => {
    return fetch(`http://localhost:8088/runTypes`).then(res => res.json())
}

export const getPostCreatedRun = (runObj) => {
    return fetch(`http://localhost:8088/runs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(runObj)
    })
}