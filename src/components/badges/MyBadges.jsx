import { useEffect, useState } from "react"
import "./MyBadges.css"
import { getCurrentUserRunInfo, getMyBadges, postBadge } from "../../services/getMyBadges.jsx"

export const MyBadges = ({currentUser}) => {
    const [currentBadges, setCurrentBadges] = useState([])
    const [userRunInfo, setUserRunInfo] = useState([])

    useEffect(() => {
        getMyBadges(currentUser.id).then((badgeArr) => {
            setCurrentBadges(badgeArr)
        })
    }, [currentUser])

    useEffect(() => {
        getCurrentUserRunInfo(currentUser.id).then((userArray) => {
            setUserRunInfo(userArray)
        })
    }, [currentUser])

    const handleClaimBadges = () => {
        /* Iterates to find distance traveled */
        let totalDistance = 0
        for (const run of userRunInfo[0].runs) {
            const distanceInt = parseInt(run.distance)
            totalDistance += distanceInt
        }

        /* Badge 1-11 in cron order */
        if(userRunInfo[0].runs.length >= 1 && !currentBadges.some(badge => badge.badgeId === 1)) {
            postBadge(currentUser.id, 1)
        } else if(userRunInfo[0].runs.length >= 3 && !currentBadges.some(badge => badge.badgeId === 2)) {
            postBadge(currentUser.id, 2)
        }  else if(userRunInfo[0].runs.length >= 10 && !currentBadges.some(badge => badge.badgeId === 3)) {
            postBadge(currentUser.id, 3)
        }  else if(userRunInfo[0].runs.length >= 50 && !currentBadges.some(badge => badge.badgeId === 4)) {
            postBadge(currentUser.id, 4)
        }  else if(userRunInfo[0].runs.length >= 100 && !currentBadges.some(badge => badge.badgeId === 5)) {
            postBadge(currentUser.id, 5)
        }  else if(userRunInfo[0].likes.length >= 1 && !currentBadges.some(badge => badge.badgeId === 6)) {
            postBadge(currentUser.id, 6)
        }  else if(userRunInfo[0].likes.length >= 3 && !currentBadges.some(badge => badge.badgeId === 7)) {
            postBadge(currentUser.id, 7)
        }  else if(totalDistance >= 1 && !currentBadges.some(badge => badge.badgeId === 8)) {
            postBadge(currentUser.id, 8)
        }  else if(totalDistance >= 10 && !currentBadges.some(badge => badge.badgeId === 9)) {
            postBadge(currentUser.id, 9)
        }  else if(totalDistance >= 50 && !currentBadges.some(badge => badge.badgeId === 10)) {
            postBadge(currentUser.id, 10)
        }  else if(totalDistance >= 100 && !currentBadges.some(badge => badge.badgeId === 11)) {
            postBadge(currentUser.id, 11)
        }

        getMyBadges(currentUser.id).then((badgeArr) => {
            setCurrentBadges(badgeArr)
        })
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen dark:bg-fourth">
            <div className="color text-first p-8 flex items-center justify-center">
                <h1 className="text-6xl font-bold font-sans text-center">My Badges</h1>
                <button 
                    className="px-4 py-2 m-4 bg-first text-white rounded hover:bg-fourth dark:hover:bg-second"
                    onClick={handleClaimBadges}
                >Claim Badges</button>
            </div>
            <div className="max-w-4xl w-full bg-third dark:bg-first dark:text-fourth p-6 rounded-lg shadow-lg flex">
                <ul>
                    {currentBadges.map((badge) => {
                        return (
                            <li>{badge.badge?.img}  {badge.badge?.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}