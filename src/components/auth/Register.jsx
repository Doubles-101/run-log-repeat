import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    username: "",
    profileImg: "https://images.vexels.com/media/users/3/263225/isolated/preview/846c7cd4a40a52e16386b3cc5cea63f6-marathon-sport-running-shoe.png"
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(customer).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "honey_user",
          JSON.stringify({
            id: createdUser.id
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(customer.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateCustomer = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setCustomer(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form className="flex flex-col w-1/2 mx-auto my-auto bg-third p-4" onSubmit={handleRegister}>
        <h1 className="text-first text-center text-6xl text-sans font-bold mx-auto my-auto">Run Log Repeat</h1>
        <h2 className="text-first text-center text-2xl text-sans font-bold mx-auto my-4">Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCustomer}
              type="text"
              id="username"
              className="rounded-lg p-2 m-2 placeholder:italic"
              placeholder="Enter your username"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCustomer}
              type="email"
              id="email"
              className="rounded-lg p-2 m-2 placeholder:italic"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="text-white text-xl text-sans font-bold mx-auto my-auto bg-first text-white px-4 py-2 m-2 transition-all 
                    duration-300 hover:bg-blue-600 hover:shadow-lg hover:bg-second" 
                    type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}
