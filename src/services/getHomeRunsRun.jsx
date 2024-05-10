export const getRunDetails = (runId) => {
    return fetch(`http://localhost:8088/runs?id=${runId}&_expand=user&_embed=likes&_expand=runType`).then(res => res.json())
}