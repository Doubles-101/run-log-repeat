export const getAllRuns = () => {
    return fetch(`http://localhost:8088/runs`).then(res => res.json())
}