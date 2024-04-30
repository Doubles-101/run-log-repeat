import { useState } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"


export const NavBar = ({currentUser}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return(
        <div className="flex flex-col items-center justify-between bg-white">
            <div className="w-full h-20 flex">
                <div className="mt-auto mb-auto">
                    {!isDropdownOpen &&
                    <button className="ml-8 hover:underline cursor-pointer" onClick={toggleDropdown}>=</button>
                    }
                    {isDropdownOpen &&
                    <button className="ml-8 hover:underline cursor-pointer" onClick={toggleDropdown}>X</button>
                    }
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-first">
                <div className="color p-2">
                    <h1 className="text-4xl font-bold font-sans text-center">RUN, LOG, REPEAT</h1>
                </div>
                </div>
            </div>

            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white z-50 w-4/5 drop">
            {isDropdownOpen &&
                <ul className="navbar bg-white">
                    <div className="text-left text-first mr-32 hover:underline cursor-pointer" onClick={toggleDropdown}>HOME
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/">
                                        Welcome
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                    </div>
                    <div className="text-left text-first mr-32 hover:underline cursor-pointer" onClick={toggleDropdown}>RUNS
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
                    <div className="text-left mr-64 text-first hover:underline cursor-pointer" onClick={toggleDropdown}>BADGES
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/mybadges">
                                        My Badges
                                    </Link>
                                </li>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to="/allbadges">
                                        All Badges
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                    </div>
                    <div className="text-left ml-64 text-first hover:underline cursor-pointer" onClick={toggleDropdown}>PROFILE
                    {isDropdownOpen && 
                        <div className="relative">
                            <ul>
                                <li className="navbar-li text-black text-left p-2 hover:underline">
                                    <Link className="navbar-link" to={`/profile/${currentUser.id}`}>
                                        My Profile
                                    </Link>
                                </li>
                                {localStorage.getItem("honey_user") ? (
                                <li className="navbar-li text-black text-left p-2 underline">
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
        </div>
    )
}

