export const getMyBadges = (userId) => {
    return fetch(`http://localhost:8088/userBadges?_expand=user&userId=${userId}&_expand=badge`).then(res => res.json())
}

export const getCurrentUserRunInfo = (userId) => {
    return fetch(`http://localhost:8088/users?id=${userId}&_embed=runs&_embed=likes`).then(res => res.json())
}

export const postBadge = (userId, badgeId) => {
    return fetch(`http://localhost:8088/userBadges`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userId: userId, badgeId: badgeId})
    })
}
