
import {
  createBrowserRouter,
 
} from "react-router";
import Home from "../components/Home";
import MainLayout from "./MainLayout";
 



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
      }, 
      
    ]
  },
]);