import React from 'react';
import Swal from 'sweetalert2';

export default function ProductInputForm() {

  const handleAddProduct=e=>{
    e.preventDefault();
    const form =e.target;
    const formData = new FormData(form)
    const newFromData=Object.fromEntries(formData.entries());
    console.log(newFromData)

    // add product server 
    fetch('http://localhost:5000/products',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newFromData)
    })
    .then(res=>res.json())
    .then(data=>{
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      console.log(data)
    })
  }

  

  return (
    <div className="  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleAddProduct}>
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >
         <div>
          <label>Product Name:</label>
          <input type="text" name="name" placeholder="Product Name" className="w-full p-2 border rounded" required />
        </div>
         <div>
          <label>Product title:</label>
          <input type="text" name="title" placeholder="Product Title" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Image URL:</label>
          <input type="text" name="image" placeholder="Product Image URL" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Price:</label>
          <input type="number" name="price" placeholder="Product Price" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Rating (1-5):</label>
          <input type="number" name="rating" placeholder="Product Rating (1-5)" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label>Product Category:</label>
          <input type="text" name="category" placeholder="Product Category" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label>Stock Status:</label>
          <select name="stock" className="w-full p-2 border rounded">
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

       </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4">Submit</button>
      </form>
    </div>
  );
}
