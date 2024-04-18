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
        <div className="welcome-container">
            <h1>Welcome to Run Log Repeat!</h1>
            <img src="https://media.istockphoto.com/id/638248938/vector/blue-pair-of-shoes.jpg?s=612x612&w=0&k=20&c=NvvS_5mJJnklXC4Pz0bODXqvWYBtEkTr6Ksss3Y7Ms4=" alt="Image of Shoes" />
            <button onClick={homeClick}>Home</button>
            <button onClick={addRunClick}>Add Run</button>
        </div>
    )
}