import { Navigate, useLocation } from "react-router-dom"


export const Authorized = ({ children }) => {
  let location = useLocation()

  // Checks if user is logged in. If they are, render the CHILD components (in this case, the ApplicationViews component)
  if (localStorage.getItem("honey_user")) {
    return children
  }
  // If the user is NOT logged in, redirect them to the login page using the Navigate component from react-router-dom
  else {
    return <Navigate to={`/login`} state={{ from: location }} replace />
  }
}
