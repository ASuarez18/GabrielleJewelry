import React, { useState } from "react";
import { data } from "../data/data.js";

function Products() {
  const [Products, setProducts] = useState(data);

  // * Filter by type
  const filterByType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // * Filter by price
  // const filterByPrice = (price) => {
  //   setProducts(
  //     data.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  return (
    <div className="max-w-[1640px] m-auto px-4 py12">
      <h1 className="text-pink-600 font-bold text-4xl text-center">
        Productos Disponibles
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filtrar por</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setProducts(data)}
              className="m-1 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              Todo
            </button>
            <button
              onClick={() => filterByType("pulsera")}
              className="m-1 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              Pulseras
            </button>
            <button
              onClick={() => filterByType("collar")}
              className="m-1 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              Collares
            </button>
            {/* <button onClick={()=> filterByType('anillo')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>Anillos</button>
            <button onClick={()=> filterByType('aretes')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>Aretes</button> */}
          </div>
        </div>

        {/* Filter Price */}
        {/* <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=> setProducts(data)} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>All</button>
            <button onClick={()=> filterByPrice('$')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>$</button>
            <button onClick={()=> filterByPrice('$$')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>$$</button>
            <button onClick={()=> filterByPrice('$$$')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>$$$</button>
            <button onClick={()=> filterByPrice('$$$$')} className='m-1 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white'>$$$$</button>
          </div>
        </div> */}
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {Products.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:bg-purple-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[150px] sm:h-[300px] object-cover rounded-t-lg"
            />
            <div className="px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="font-semibold">Material:</span> {item.material}
              </p>
              {/* <p>
                <span className="font-semibold">Medida:</span> {item.size}
              </p> */}
              <p>
                <span className="bg-pink-600 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
