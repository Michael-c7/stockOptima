import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart, Pie,
    BarChart, Bar, Cell, Legend,
  } from 'recharts';





// put all the charts here
const StatsChartContainer = ({selectedChart, chartData}) => {
    let chartHeightInPixels = 450

  return (
    <div>
        {/* top 5 categories */}
        {chartData.popularCategories.length < 1 && selectedChart === "mostPopularCategories" && <h2 className=" text-3xl text-center my-12">No data available...</h2>}
        {selectedChart === "mostPopularCategories" && chartData.popularCategories.length > 0 ? 
            (
                <div className="w-[98%] relative ml-[1%]">
                    <ResponsiveContainer width='100%' height={chartHeightInPixels}>
                        <PieChart  height={chartHeightInPixels}>
                            <Pie
                                dataKey="count"
                                data={chartData.popularCategories.map(item => ({ name: item.category, count: item.count }))} // change category to name because names work by default in the name prop and category doesn't, and I'd have to do a bunch of extra for if I didn't do it this way
                                innerRadius={120}
                                outerRadius={180}
                                fill="#22C55E"
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            ) : ("")
        }




        {/* Monthly Products Created */}
        {chartData.productsCreatedByMonth.length < 1 && selectedChart === "monthlyProducts" && <h2 className=" text-3xl text-center my-12">No data available...</h2>}
        {selectedChart === "monthlyProducts" && chartData.productsCreatedByMonth.length > 0 ? 
            (
                <div className="w-[98%] relative ml-[1%]">
                    <ResponsiveContainer width='100%' height={chartHeightInPixels}>
                        <AreaChart data={chartData.productsCreatedByMonth} margin={{ top: 50 }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='date' />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Area type='monotone' dataKey="count" stroke='#10602E' fill='#22C55E' />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            ) : ("")

        }





        {/* Highest Quantity products */}
        {chartData.highestQuantityProducts.length < 1 && selectedChart === "highestQuantityProducts" && <h2 className=" text-3xl text-center my-12">No data available...</h2>}
        {selectedChart === "highestQuantityProducts" && chartData.highestQuantityProducts.length > 0 ? 
        (
            <div className="w-[98%] relative ml-[1%]">
                <ResponsiveContainer width='100%' height={chartHeightInPixels}>
                    <BarChart width={150} height={40} data={chartData.highestQuantityProducts}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#22CC55" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ) : ("")
        }




        {/* Lowest Quantity products */}
        {chartData.lowestQuantityProducts.length < 1 && selectedChart === "lowestQuantityProducts" && <h2 className=" text-3xl text-center my-12">No data available...</h2>}
        {selectedChart === "lowestQuantityProducts" && chartData.lowestQuantityProducts.length > 0 ? 
        (
            <div className="w-[98%] relative ml-[1%]">
                <ResponsiveContainer width='100%' height={chartHeightInPixels}>
                    <BarChart width={150} height={40} data={chartData.lowestQuantityProducts}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#5523CC" /> 
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ) : ("")
        }
    </div>
  )
}

export default StatsChartContainer