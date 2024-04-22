export const getRunDetails = (runId) => {
    return fetch(`http://localhost:8088/runs?id=${runId}&_expand=user&_embed=likes`).then(res => res.json())
}