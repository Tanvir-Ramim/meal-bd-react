import { createBrowserRouter } from "react-router-dom";
import Home from "../Conponenets/Home";
import Category from "../Conponenets/Category";
import Details from "../Conponenets/Details";



const myCreateRouter=createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),

        children:[
            {
                 path:'/',
                 element:<h1>aramim</h1>
            },
            {
                path: '/:category',
                loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
               element: <Category></Category>
            },
            {
                path: '/:category/:id',
                loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
                element:<Details></Details>
            }
        ]
        
    }
])




export default myCreateRouter;