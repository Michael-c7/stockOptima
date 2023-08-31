import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  let headingText = ", Your Effortless Inventory Management Solution"
  let descriptionText = "Are you tired of struggling with manual spreadsheets and complex inventory management processes? Look no further! StockOptima is here to revolutionize the way you handle your inventory."
  
  // the current image is a placeholder, make sure to put either an image or a video of the real dashboard / site.
  let imgDisplay = "https://cdn.dribbble.com/users/584216/screenshots/14488488/media/fce03b7973f46e54c50ca76c22cd0479.png"

  return (
    <div className="grid place-items-center h-[100vh]">
      <div className="sm:max-w-4xl max-w-full text-center">
        <div className="sm:mx-8 mx-0">
          <h1 className="text-5xl font-medium leading-tight">
            <span>Stock<span className="text-green-500">Optima</span></span>
            {headingText}
          </h1>
          <p className="my-6">{descriptionText}</p>
          
          <div className="p-4 flex justify-center items-center flex-col sm:flex-row sm:space-x-4 space-x-0 space-y-4 sm:space-y-0">
            <Link to="/register" className="btn-main">
            Register
            </Link>
            <Link to="login" className="btn-main">
            Login / demo user
            </Link>
          </div>
        </div>

        <div className="mt-10 w-full">
          {/* make sure when you've finished the actual dashboard & populated it w/ data to replace the placeholder here w/ real screenshot */}
          <img src={imgDisplay} alt="dashboard of stock optima" className="rounded-sm max-h-[500px] w-full object-cover drop-shadow"/>
        </div>
      </div>

    </div>
  )
}

export default Landing