import React from 'react'
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

function EditProduct() {
  const data= useLoaderData()

const handleEditProduct=e=>{
  e.preventDefault()
  const form = e.target;
  const editProdunct = new FormData(form);
  const NewData = Object.fromEntries(editProdunct.entries());
  console.log(NewData)

  // handle edit clicd 
  fetch(`http://localhost:5000/products/${data._id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(NewData)
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
    console.log( 'after editing data ', data)
  })
}

  return (
    <div>
          <div className="  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4">
      <h2 className="text-2xl font-bold mb-4">Add Edit Product</h2>
      <form onSubmit={handleEditProduct}>
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >
         <div>
          <label>Product Name:</label>
          <input type="text"
          defaultValue={data.name}
          name="name" placeholder="Product Name" className="w-full p-2 border rounded" required />
        </div>
         <div>
          <label>Product title:</label>
          <input type="text"
          defaultValue={data.title}
          name="title" placeholder="Product Title" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Image URL:</label>
          <input type="text"
          defaultValue={data.image}
          name="image" placeholder="Product Image URL" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Price:</label>
          <input type="number" name="price"
          defaultValue={data.price}
          placeholder="Product Price" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label>Product Rating (1-5):</label>
          <input type="number" 
          defaultValue={data.rating}
          name="rating" placeholder="Product Rating (1-5)" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label>Product Category:</label>
          <input type="text"
          defaultValue={data.category}
          name="category" placeholder="Product Category" className="w-full p-2 border rounded" />
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
    </div>
  )
}

export default EditProduct