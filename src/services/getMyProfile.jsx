/* grabbing the user profile and runs they have posted. So we can get 
info and number of runs */
export const getMyProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=runs`).then(res => res.json())
}