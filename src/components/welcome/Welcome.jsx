import { useNavigate } from "react-router-dom"
import "./Welcome.css"


export const Welcome = () => {

    const navigate = useNavigate()

    const homeClick = () => {
        navigate("/home")
    }

    const addRunClick = () => {
        navigate("/addrun")
    }

    return (
       <div className="flex h-screen justify-center align-center">
        <div className="flex bg-first box">Welcome</div>
       
       </div>


    )
}