import React from 'react'
import { useLoaderData } from 'react-router'

function ProductDetails() {
  const { price, image, title, name,stock} = useLoaderData()
 
  return (
    <div>
         <div className="max-w-4xl bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row mx-auto  my-12">
      {/* Image Section (Left) */}
      <div className="w-full sm:w-2/5 bg-gray-100 flex items-center justify-center p-6">
        <img 
          src={image}
          alt="Asusu Laptop 22" 
          className="object-contain h-64 w-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Text Content Section (Right) */}
      <div className="w-full sm:w-3/5 p-6">
        {/* Category and Stock */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">leteest</span>
          <span className="text-xs font-medium text-green-800 bg-green-100 px-2.5 py-1 rounded-full">{stock}</span>
        </div>

        {/* Product Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">{title}</p>

        {/* Price */}
        <div className="text-3xl font-bold text-gray-900 mb-6">${price}</div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
            ❤️
          </button>
          <button className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails