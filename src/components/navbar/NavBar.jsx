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
            <button className="ml-8 mr-16 sticky " onClick={toggleDropdown}>=</button>
            <h2 className="mr-8 text-center">RUN, LOG, REPEAT</h2>
            {isDropdownOpen &&
                <ul className="navbar">
                    <div className="text-left text-blue-600 mr-64 hover:underline cursor-pointer" onClick={toggleDropdown}>RUNS
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/home">
                                        All Runs
                                    </Link>
                                </li>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/addrun">
                                        Add Run
                                    </Link>
                                </li>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/myruns">
                                        My Runs
                                    </Link>
                                </li>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/likes">
                                        Likes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                    </div>
                    <div className="text-left mr-64 text-blue-600 hover:underline cursor-pointer" onClick={toggleDropdown}>TRAINING PLANS
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/addrun">
                                        Add Run
                                    </Link>
                                </li>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/myruns">
                                        My Runs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                    </div>
                    <div className="text-right ml-64  text-blue-600 hover:underline cursor-pointer" onClick={toggleDropdown}>PROFILE
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-right p-2 hover:underline">
                                    <Link className="navbar-link" to={`/profile/${currentUser.id}`}>
                                        My Profile
                                    </Link>
                                </li>
                                {localStorage.getItem("honey_user") ? (
                                <li className="navbar-li text-black text-right p-2 underline">
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
                    }
                    </div>
                </ul>
            }
        </div>
    )
}

