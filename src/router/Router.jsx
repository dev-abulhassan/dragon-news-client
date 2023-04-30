import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Category from "../components/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children:[
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/category/:id',
            element: <Category></Category>
         }
      ]
   },
   {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children:[
         {
            path: ':id',
            element : <News></News>
         }
      ]
   }
])

export default router;