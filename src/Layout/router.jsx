
import {
  createBrowserRouter,
 
} from "react-router";
import Home from "../components/Home";
import MainLayout from "./MainLayout";
import ProductInputForm from "../components/ProductInputForm";
 



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
      }
      
    ]
  },
]);