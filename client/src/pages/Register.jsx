import React from "react"
import { Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer"


const Register = () => {
  return (
    <section className="min-h-[100vh] text-center flex flex-col justify-center items-center bg-gray-50 ">
      <form method="post" action="/register" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h1 className="text-4xl mb-8 font-light capitalize">Register</h1>
        <InputContainer type="text" name="name" labelText="name" />
        <InputContainer type="password" name="password" labelText="password" />

        <button type="submit" className="btn-main w-full">Submit</button>
        <p className="mt-3">Have an account? <Link to="/login" className="text-green-500">Login</Link></p>
      </form>
    </section>
  )
}

export default Register