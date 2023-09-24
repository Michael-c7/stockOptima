import React from "react"
import { Form, redirect, useNavigation, Link, useNavigate } from "react-router-dom"
import InputContainer from "../../components/InputContainer"
import customFetch from "../../utils/customFetch"
import { toast } from 'react-toastify';


export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post("/auth/login", data)
    toast.success("Login successful")
    return redirect("/dashboard");
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error;
  }
}


const Login = () => {
  const navigation = useNavigation()
  const navigate = useNavigate()
  const isSubmitting = navigation.state === "submitting"

  const loginDemoUser = async () => {
    const data = {
      email:'demoUser@email.com',
      password:'nmJ6?"=^K#W<4NZ]Q!rxSM',
    }

    try {
      await customFetch.post("/auth/login", data)
      toast.success("Demo user login successful")
      navigate("/dashboard")
    } catch (error) {
      toast.error(error?.response?.data?.msg)
    }
  }

  return (
    <section className="min-h-[100vh] text-center flex flex-col justify-center items-center bg-gray-50">
      <Form method="post" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h1 className="text-4xl mb-8 font-light capitalize">Login</h1>

        <InputContainer type="email" name="email" labelText="email" />
        <InputContainer type="password" name="password" labelText="password" />

        <button type="submit" className="btn-main w-full" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
        <button type="button" className="btn-secondary w-full mt-2" onClick={loginDemoUser}>Explore the App</button>

        <p className="mt-3">Don't have an account? <Link to="/register" className="text-green-500">Sign up</Link></p>
      </Form>
    </section>
  )
}

export default Login