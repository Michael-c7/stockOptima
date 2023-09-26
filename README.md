# My Awesome Project
A full-stack Inventory management application that allows users to create products displayed in a table layout with search and filter functionality,  a stats page to give you a breakdown of all your products, and a profile page where you can update your name, profile image, and email address!

[Live Site and demo account](https://stockoptima.onrender.com/)

[![stock-Optima-Gif.gif](https://i.postimg.cc/RZJY6Y9Z/stock-Optima-Gif.gif)](https://postimg.cc/9DVbsJr6)

## How It's Made:

**Tech used:** React, Tailwind CSS, Node, Express, MongoDB, Mongoose, Recharts



[![so-data-model.png](https://i.postimg.cc/j2Tkn6K3/so-data-model.png)](https://postimg.cc/ZBfL1dW6)

I started this project with planning that encompassed conceptualization, naming, page layout, and feature brainstorming. I crafted a data model, which served as the foundation for the project.
Moving on from the planning phase, I started with the client-side implementation. Firstly, I established the initial visual style for various pages, ensuring a cohesive and visually appealing user interface. Subsequently, I tackled front-end routing using react-router, enabling navigation between different sections of the application. Transitioning to the server side, I built out the core functionality. This involved creating essential backend routes for actions such as product creation, product editing, user registration, and login. I tested these routes using Postman to ensure usability and reliability. I introduced validation middleware and implemented JWT (JSON Web Tokens) for secure authentication. Additionally, I incorporated bcrypt for password hashing, enhancing the safety of user credentials. With the server infrastructure in place, I embarked on the process of bridging the backend and frontend components. This integration encompassed various functionalities like user registration, login, product listing, and profile management, including image uploads to Cloudinary for profile images. The next step involved crafting a dynamic stats page. Leveraging the power of the Mongoose aggregation pipeline, I extracted useful information such as the inventory's total value, the popularity of product categories, and information on items with the highest and lowest quantities. These insights were elegantly presented using responsive charts from the Recharts library, enhancing the user experience. Next, I implemented a filter for the product table. Users could now filter products by price, quantity, and value, in addition to sorting options like newest, oldest, and alphabetical order which also includes a text search feature. As a final touch, I created a demo user account to facilitate user testing. Once satisfied with the application's functionality, I deployed it to a render which allows you to host full-stack applications.


## Lessons Learned:

In my last project I didn't model the data so in this project I decided to create a data model and focus more on pre-planning which saved me time in the long run and helped me know more explicitly what I was going to do. The main challenge in this project was learning backend technologies like Node and Express, JWT, implementing custom middleware for stuff like authentication and image upload, putting it all together, and implementing the MVC pattern in my app. Overall I'm very happy with the progress I made and what I learned and I can't wait to learn even more in the future!

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Biztech Blog:** [https://github.com/Michael-c7/blog-site](https://github.com/Michael-c7/blog-site)

**RETINA glasses store:** [https://github.com/Michael-c7/glasses-store](https://github.com/Michael-c7/glasses-store)
