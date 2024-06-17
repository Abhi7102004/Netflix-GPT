import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Browse from './Browse'
import Login from './Login'
const Body = () => {
  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"browse",
        element:<Browse/>
    },
    {
      path:"login",
      element:<Login/>
    }
  ])
  return(
    <RouterProvider router={appRouter}/>
  )
}

export default Body