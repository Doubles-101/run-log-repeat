/* grabbing the user profile and runs they have posted. So we can get 
info and number of runs */
export const getMyProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=runs`).then(res => res.json())
}

export const getEditProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`).then(res => res.json())
}

export const getPutProfile = (newProfile) => {
    return fetch(`http://localhost:8088/users/${newProfile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProfile)
    })
}

export const getUserBadgeCount = (userId) => {
    return fetch(`http://localhost:8088/userBadges?userId=${userId}`).then(res => res.json())
}