export const getRunTypes = () => {
    return fetch(`http://localhost:8088/runTypes`).then(res => res.json())
}