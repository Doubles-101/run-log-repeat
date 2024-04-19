export const getMyRunsList = (userId) => {
    return fetch(`http://localhost:8088/runs?userId=${userId}`).then(res => res.json())
}