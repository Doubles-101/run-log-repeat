export const getCurrentRunDetails = (runId) => {
    return fetch(`http://localhost:8088/runs/${runId}?_embed=likes&_expand=user&_expand=runType`).then(res => res.json())
}

export const getDeleteRun = (runId) => {
    return fetch(`http://localhost:8088/runs/${runId}`, {
        method: "DELETE"
    })
}