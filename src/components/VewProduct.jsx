import React from 'react'

function VewProduct({data,handleDelet}) {

  return (
    <div> 

          <div className=" mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
    

      {/* Product Image */}
      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={data.image}
      
          className="object-contain h-full w-full hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 truncate">
         {data.name}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-gray-900">${data.price}</span>
          
          {/* Add to Cart Button */}
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300">
            Add to Cart
          </button>
        </div>

        {/* Additional Features (Mock)
        <div className="mt-4 flex flex-wrap gap-2">
          {['15.6" Display', '8GB RAM', '256GB SSD', 'Windows 11'].map((feature) => (
            <span key={feature} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div> */}

        {/* Quick View Button */}
        <button className="w-full mt-4 text-gray-900 hover:text-white border border-gray-300 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300">
          Quick View
        </button>
      <button onClick={()=>handleDelet(data?._id)} className='btn btn-secondary relative -top-90 -right-60'>X</button>
      </div>
    </div>
    </div>
  )
}

export default VewProduct