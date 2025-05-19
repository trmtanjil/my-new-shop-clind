
import {
  createBrowserRouter,
 
} from "react-router";
import Home from "../components/Home";
import MainLayout from "./MainLayout";
import ProductInputForm from "../components/ProductInputForm";
import ProductDetails from "../components/ProductDetails";
import EditProduct from "../components/EditProduct";
 



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
      }, 
      {
        path:'addproduct',
        Component:ProductInputForm,
      },
     {
       path:'ProductDetails/:id',
       loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
       Component:ProductDetails,
     },
       {
         path:'editprodunt/:id',
       loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
       Component:EditProduct,
       }
      
      
    ]
  },
]);