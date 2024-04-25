import { useState } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"


export const NavBar = ({currentUser}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return(
        <div className="navbar">
            <ul className="navbar">
                <li className="navbar-li text-left" onClick={toggleDropdown}>RUNS
                {isDropdownOpen && 
                    <div className="relative">
                        <ul>
                            <li className="navbar-li text-black text-left p-2 hover:text-white hover:underline">
                                <Link className="navbar-link" to="/home">
                                    All Runs
                                </Link>
                            </li>
                            <li className="navbar-li text-black text-left p-2 hover:text-white hover:underline">
                                <Link className="navbar-link" to="/addrun">
                                    Add Run
                                </Link>
                            </li>
                            <li className="navbar-li text-black text-left p-2 hover:text-white hover:underline">
                                <Link className="navbar-link" to="/myruns">
                                    My Runs
                                </Link>
                            </li>
                            <li className="navbar-li text-black text-left p-2 hover:text-white hover:underline">
                                <Link className="navbar-link" to="/likes">
                                    Likes
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
                </li>
                <li className="navbar-li text-right" onClick={toggleDropdown}>Profile
                {isDropdownOpen && 
                    <div className="relative">
                        <ul>
                            <li className="navbar-li text-black text-right p-2 hover:text-white hover:underline">
                                <Link className="navbar-link" to={`/profile/${currentUser.id}`}>
                                    My Profile
                                </Link>
                            </li>
                            {localStorage.getItem("honey_user") ? (
                            <li className="navbar-li text-white text-right p-2 hover:text-white hover:underline">
                                <Link
                                className="navbar-link"
                                to=""
                                onClick={() => {
                                    localStorage.removeItem("honey_user")
                                    navigate("/", { replace: true })
                                }}
                                >
                                Logout
                                </Link>
                            </li>
                            ) : (
                            ""
                            )}
                        </ul>
                    </div>
                }</li>
                
                
            </ul>
        </div>
    )
}

