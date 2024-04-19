import { NavBar } from "../navbar/NavBar.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "../welcome/Welcome.jsx"
import { Home } from "../home/Home.jsx"
import { AddRun } from "../addrun/AddRun.jsx"
import { MyRuns } from "../myruns/MyRuns.jsx"
import { Likes } from "../likes/Likes.jsx"
import { MyProfile } from "../myprofile/MyProfile.jsx"
import { useEffect, useState } from "react"

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
                    <NavBar />
                    <Outlet />
                </>
            }>
                <Route index element={<Welcome />} />
                <Route path="home" element={<Home />} />
                <Route path="addrun" element={<AddRun currentUser={currentUser}/>} />
                <Route path="myruns" element={<MyRuns currentUser={currentUser}/>} />
                <Route path="likes" element={<Likes />} />
                <Route path="myprofile" element={<MyProfile currentUser={currentUser}/>} />
            </Route>    
        </Routes>
    )
}