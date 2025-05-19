import React, { useEffect, useState } from 'react'
import VewProduct from './VewProduct'
 

function Home() {
  const [alldata, setAllData] =useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])

  const handleDelet = (id)=>{
   
    fetch(`http://localhost:5000/products/${id}`,{
      method:'DELETE',
      headers:{
        'content-type': 'application/json'
      },
       

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        const remainingdata = alldata.filter(data=>data._id!==id);
        setAllData(remainingdata)
        console.log(data)
      }
    })  
  }
  return (
    <div>
      <div>
        <div className="relative max-w-md mx-auto my-6">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="search"
    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Search..."
    required
    />
  <button
    type="submit"
    className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
    >
    Search
  </button>
</div>
      </div>
    
    <h1 className='text-center text-2xl font-bold'> Product length{alldata.length}</h1>
    <div className='grid md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 p-4' >
      
      {
        alldata.map(data=><VewProduct key={data._id} data={data}
        handleDelet={handleDelet}
        ></VewProduct>)
      }
    </div>
    </div>
  )
}

export default Home