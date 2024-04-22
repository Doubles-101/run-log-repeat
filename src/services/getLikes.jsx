export const getLikes = (userId) => {
    return fetch(`http://localhost:8088/likes?userId=${userId}&_expand=run`).then(res => res.json())
}