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
        <div className="w-screen">
            <div className="w-screen bg-blue-200 p-8 opacity-0 hover:opacity-100 transition-opacity duration-1000">WELCOME</div>
            
            <img src="https://media.istockphoto.com/id/638248938/vector/blue-pair-of-shoes.jpg?s=612x612&w=0&k=20&c=NvvS_5mJJnklXC4Pz0bODXqvWYBtEkTr6Ksss3Y7Ms4=" alt="Image of Shoes" 
            className="h-1/2 w-1/2"
            />
            <button onClick={homeClick}>Home</button>
            <button onClick={addRunClick}>Add Run</button>
        </div>
    )
}