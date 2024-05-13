import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
  const [email, set] = useState("bi@da.ge")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "honey_user",
          JSON.stringify({
            id: user.id
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="flex flex-col w-100 h-screen mx-auto dark:bg-fourth">
      <section className="w-1/2 mx-auto my-auto p-4">
        <form className="flex flex-col w-1/2 mx-auto my-auto bg-third p-4" onSubmit={handleLogin}>
          <h1 className="text-first text-center text-6xl text-sans font-bold mx-auto my-auto">Run Log Repeat</h1>
          <h2 className="text-first text-center text-2xl text-sans font-bold mx-auto my-4">Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="rounded-lg p-2 m-2 placeholder:italic"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="bg-first text-white px-4 py-2 m-2 transition-all 
              duration-300 hover:bg-fourth hover:shadow-lg" 
              type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
          <div className="text-fourth text-center">
            <Link to="/register">Not a member yet?</Link>
          </div>
        </form>
      </section>
    </main>
  )
}
