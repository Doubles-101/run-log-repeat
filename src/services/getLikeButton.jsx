export const getLikeButton = (userId, runId) => {
    return fetch(`http://localhost:8088/runLikes?userId=${userId}&runId=${runId}`).then(res => res.json())
}