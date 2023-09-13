import { Form, redirect, useNavigation, Link } from "react-router-dom"
import InputContainer from "../../components/InputContainer"
import customFetch from "../../utils/customFetch"
import { toast } from 'react-toastify';

export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post("/auth/register", data)
    toast.success("Registration successful")
    return redirect("/login");
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error;
  }
}



const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"


  return (
    <section className="min-h-[100vh] text-center flex flex-col justify-center items-center bg-gray-50 ">
      <Form method="post" action="/register" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm">
        <h1 className="text-4xl mb-8 font-light capitalize">Register</h1>
        <InputContainer type="text" name="name" labelText="name" />
        <InputContainer type="email" name="email" labelText="email" />
        <InputContainer type="password" name="password" labelText="password" />

        <button type="submit" className="btn-main w-full" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
        <p className="mt-3">Have an account? <Link to="/login" className="text-green-500">Login</Link></p>
      </Form>
    </section>
  )
}

export default Register