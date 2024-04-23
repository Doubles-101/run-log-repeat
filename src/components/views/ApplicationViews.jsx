import { NavBar } from "../navbar/NavBar.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "../welcome/Welcome.jsx"
import { Home } from "../home/Home.jsx"
import { AddRun } from "../addrun/AddRun.jsx"
import { MyRuns } from "../myruns/MyRuns.jsx"
import { Likes } from "../likes/Likes.jsx"
import { Profile } from "../profile/Profile.jsx"
import { useEffect, useState } from "react"
import { EditProfile } from "../profile/EditProfile.jsx"
import { RunDetails } from "../rundetails/RunDetails.jsx"
import { EditRun } from "../rundetails/EditRun.jsx"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({}) 


    useEffect(() => {
        const localHoneyuser = localStorage.getItem("honey_user")
        const honeyUserObj = JSON.parse(localHoneyuser)

        setCurrentUser(honeyUserObj)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar currentUser={currentUser}/>
                    <Outlet />
                </>
            }>
                <Route index element={<Welcome />} />
                <Route path="home" element={<Home />} />
                <Route path="addrun" element={<AddRun currentUser={currentUser}/>} />
                <Route path="myruns" element={<MyRuns currentUser={currentUser}/>} />
                <Route path="rundetails">
                    <Route path=":runDetailsId" element={<RunDetails currentUser={currentUser}/>} />
                </Route>
                <Route path="editrun">
                    <Route path=":editRunId" element={<EditRun currentUser={currentUser} />} />
                </Route>
                <Route path="likes" element={<Likes currentUser={currentUser}/>} />
                <Route path="profile">
                    <Route path=":profileId" element={<Profile currentUser={currentUser}/>} />
                </Route>
                <Route path="editprofile" element={<EditProfile currentUser={currentUser}/>} />
            </Route>    
        </Routes>
    )
}