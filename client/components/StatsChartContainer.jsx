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



  return (
    <div>
        {/* top 5 categories */}
        {selectedChart === "mostPopularCategories" ? 
            (
                <div className="w-[98%] relative ml-[1%]">
                    <PieChart width={1000} height={400}>
                        <Pie
                            dataKey="count"
                            data={chartData.popularCategories.map(item => ({ name: item.category, count: item.count }))} // change category to name because names work by default in the name prop and category doesn't, and I'd have to do a bunch of extra for if I didn't do it this way
                            cx={800}
                            cy={200}
                            innerRadius={100}
                            outerRadius={170}
                            fill="#22C55E"
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            ) : ("")
        }




        {/* Monthly Products Created */}
        {selectedChart === "monthlyProducts" ? 
            (
                <div className="w-[98%] relative ml-[1%]">
                    <ResponsiveContainer width='100%' height={450}>
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
        {selectedChart === "highestQuantityProducts" ? 
        (
            <div className="w-[98%] relative ml-[1%]">
                <ResponsiveContainer width='100%' height={450}>
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
        {selectedChart === "lowestQuantityProducts" ? 
        (
            <div className="w-[98%] relative ml-[1%]">
                <ResponsiveContainer width='100%' height={450}>
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