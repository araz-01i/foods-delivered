import React from "react";
import { categories } from '../data/data.js';
const Category = () => {
    return ( 

        <div className="container mx-auto px-6 py-12 max-w-[1640px]">
            <h1 className="text-orange-600 font-bold text-3xl md:text-4xl text-center">Top Rated Menu Items </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {categories.map((item, index) => (
                    <div key={index} className=" bg-gray-100 rounded-lg p-4 flex justify-between gap-x-0.5 items-center ">
                        <h2 className="font-bold text-xs md:text-lg">{item.name}</h2>
                        <img src={item.image} alt={item.name} className="w-14 md:w-20 object-cover" />
                        
                </div>       
))}
            </div>
        </div>
     );
}
 
export default Category;