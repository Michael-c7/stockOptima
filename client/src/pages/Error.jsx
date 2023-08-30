import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if(error.status === 404) {
    return (
      <div>
        <h2>404 error</h2>
        <Link to="/">Go home</Link>
      </div>
    )
  }
  return (
    <div>
      <h2>An error occurred.</h2>
      <Link to="/">Go home</Link>
    </div>
  )
}

export default Error