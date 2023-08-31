import React from "react"
import { Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer"


const Login = () => {
  return (
    <section className="min-h-[100vh] text-center flex flex-col justify-center items-center bg-gray-50 ">
      <form method="post" action="/register" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h1 className="text-4xl mb-8 font-light capitalize">Login</h1>
        <InputContainer type="text" name="name" labelText="name" />

        <InputContainer type="password" name="password" labelText="password" />

        <button type="submit" className="btn-main w-full">Submit</button>
        <button type="button" className="btn-main w-full mt-2">Explore the App</button>

        <p className="mt-3">Don't have an account? <Link to="/register" className="text-green-500">Sign up</Link></p>
      </form>
    </section>
  )
}

export default Login