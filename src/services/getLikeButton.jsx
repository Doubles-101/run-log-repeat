export const getLikeButton = (userId, runId) => {
    return fetch(`http://localhost:8088/likes?userId=${userId}&runId=${runId}`).then(res => res.json())
}

export const getPostLike = (userId, runId) => {
    return fetch(`http://localhost:8088/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userId: userId, runId: runId})
    })
}

export const getDeleteLike = (id) => {
    return fetch(`http://localhost:8088/likes/${id}`, {
        method: "DELETE"
    })
}