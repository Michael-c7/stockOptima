import React from "react"
import { Link, useRouteError } from "react-router-dom"

import pageNotFound from "../assets/images/page_not_found.svg"
import serverDown from "../assets/images/server-down.svg"

const Error = () => {
  const error = useRouteError()

  if(error.status === 404) {
    return (
      <div className="min-h-[100vh] text-center flex flex-col justify-center items-center">
        <img src={pageNotFound} className="w-[90vw] max-w-[600px]" alt="not found"/>
        <h2 className="text-4xl mt-8">Page not found.</h2>
        <p className="text-gray-500 mt-2 mb-4">Apologies, but it seems like we couldn't find the page you're looking for.</p>
        <Link to="/" className="btn-main py-4 px-6">Go home</Link>
      </div>
    )
  }

  return (
    <div className="min-h-[100vh] text-center flex flex-col justify-center items-center">
      <img src={serverDown} className="w-[90vw] max-w-[600px]" alt="not found"/>
      <h2 className="text-4xl mt-8">An Error has Occurred.</h2>
      <p className="text-gray-500 mt-2 mb-4">We apologize for any disruption this may have caused to your experience..</p>
      <Link to="/" className="btn-main py-4 px-6">Go home</Link>
    </div>
  )
}

export default Error