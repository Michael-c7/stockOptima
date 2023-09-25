import { Fragment, useState } from 'react'

import { 
  HiShoppingCart,
  HiCurrencyDollar,
  HiBan,
  HiDocumentText,
  HiCheck,
} from "react-icons/hi"
import { HiChevronUpDown } from "react-icons/hi2"


import { addCommasToNumber, truncateStringWithEllipsis } from '../../utils/misc'
import { useLoaderData } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react'
import customFetch from "../../utils/customFetch"
import { InfoCardContainer } from '../../components/InfoCardContainer';
import StatsChartContainer from '../../components/StatsChartContainer';





export const loader = async () => {
  try {
    const response = await customFetch.get('/products/stats');
    return response.data;
  } catch (error) {
    return error;
  }
}








const Stats = () => {
  const { defaultStats, chartData } = useLoaderData()

  const cardInfo = [
    {
      icon:<HiShoppingCart/>,
      headingText:"Total Products",
      infoNumber:defaultStats.totalProducts,
    },
    {
      icon:<HiCurrencyDollar/>,
      headingText:"Total Store Value",
      infoNumber:defaultStats.totalStoreValue,
    },
    {
      icon:<HiBan/>,
      headingText:"Out of Stock",
      infoNumber:defaultStats.outOfStock,
    },
    {
      icon:<HiDocumentText/>,
      headingText:"All Categories",
      infoNumber:defaultStats.allCategories,
    },
  ]


  const statOptions = [
    { 
      name: 'Most popular Categories',
      text: "mostPopularCategories",
    },
    { 
      name: 'Monthly Products',
      text: "monthlyProducts"
    },
    { 
      name: 'Highest Quantity products',
      text: "highestQuantityProducts"
    },
    { 
      name: 'Lowest Quantity products',
      text: "lowestQuantityProducts"
    },

  ]


  let [selected, setSelected] = useState(statOptions[0])

  // console.log(selected)


  return (
    <section className='space-y-6'>
      <div className='flex flex-wrap gap-4'>
        {cardInfo.map(({icon, headingText, infoNumber, color}, index) => {
          return (
            <InfoCardContainer {...{icon, headingText, infoNumber, color}} key={index}/>
          )
        })}
      </div>

      <div>
        <div>
          <h2 className='text-center text-3xl mt-16'>{selected.name}</h2>
            <Listbox value={selected} onChange={setSelected} className="w-72 m-auto z-40">
              <div className="relative my-4">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiChevronUpDown
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {statOptions.map((statCategory, statCategoryId) => (
                      <Listbox.Option
                        key={statCategoryId}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                          }`
                        }
                        value={statCategory}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {statCategory.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                <HiCheck className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
        </div>
        <div className='relative'>
            <StatsChartContainer {...{selectedChart:selected.text, chartData}}/>
        </div>
      </div>
    </section>
  )
}

export default Stats