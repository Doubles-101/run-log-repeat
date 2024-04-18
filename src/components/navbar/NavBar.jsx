import "./NavBar.css"
import { Link } from "react-router-dom"

export const NavBar = () => {

    return(
        <div className="navbar">
            <ul className="navbar">
                <li className="navbar-li">
                    <Link className="navbar-link" to="/home">
                        Home
                    </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/addrun">
                        Add Run
                    </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/myruns">
                        My Runs
                    </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/likes">
                        Likes
                    </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/myprofile">
                        My Profile
                    </Link>
                </li>
                {localStorage.getItem("honey_user") ? (
                <li className="navbar-li navbar-logout">
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
    )
}