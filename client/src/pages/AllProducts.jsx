import { useContext, createContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom'

import {
  HiChevronLeft,
  HiChevronRight,
 } from "react-icons/hi"

import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import SearchContainer from '../../components/SearchContainer'
import ProductContainer from '../../components/ProductContainer'




const AllProductsContext = createContext()
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])


  try {
    const { data } = await customFetch.get("/products", {
      params,
    })
    return { data, searchValues: {...params}}
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null
  }
}

const AllProducts = () => {
  const { data, searchValues } = useLoaderData()
  const { products, totalProducts, currentPage, numOfPages, maxValuesForFilters } = data

  let numOfPagesArr = Array.from({ length:numOfPages })
  

  const {search, pathname} = useLocation()
  const navigate = useNavigate()

  
  const handlePageChange = (pageNumber) => {
    // reconstruct the url w/ our sort, filters and path now with the page add onto that to make a request to the server /w all my other stuff still intact
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  
  let prevPageLogic = currentPage <= 1 ? 1 : currentPage - 1
  let nextPageLogic = currentPage >= numOfPages ? numOfPages : currentPage + 1


  return (
    <AllProductsContext.Provider value={{data, searchValues}}>
        <section className='bg-white p-4 overflow-auto h-full'>
          <SearchContainer products={products} maxValuesForFilters={maxValuesForFilters}/>      
          {products.length > 0 ? (
            <>
            <table className='w-full'>
              <thead>
                <tr className='text-left bg-gray-100 border-b-2 border-t-2'>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => {
                  return (
                    <ProductContainer index={index} item={item} key={item._id}/>
                  );
                })}
              </tbody>
            </table>

            <footer className='pt-14 pb-2 flex flex-row justify-between items-center text-gray-500'>
              <p>Showing 1 - {products.length} of {totalProducts} entries</p>
              {numOfPages > 1 && (
                <div className='flex flex-row items-center'>
                  {/* prev page button */}
                  <button className='text-2xl bg-gray-100 mr-2 rounded' onClick={() => handlePageChange(prevPageLogic)}><HiChevronLeft/></button>
                  {numOfPagesArr.map((_, index) => {
                    return (
                      <button key={index} className={`mx-1 px-2 hover:bg-gray-100 rounded ${currentPage === (index + 1) && "bg-green-500 text-white hover:bg-green-500"}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    )
                  })}
                  {/* next page button */}
                  <button className='text-2xl bg-gray-100 ml-2 rounded' onClick={() => handlePageChange(nextPageLogic)}><HiChevronRight/></button>
                </div>
              )}
            </footer>
            </>
          ) : (
            <h2 className='text-4xl my-4'>No products to show...</h2>
          )}
      </section>
    </AllProductsContext.Provider>
  )
}

export default AllProducts


export const useAllProductsContext = () => useContext(AllProductsContext);