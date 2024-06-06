import MainPage from "./pages/MainPages"
import PokemonPage from "./pages/PokemonPages"
import Header from "./components/Header"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Outlet from "./components/Outlet"



const App = () => {
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet><MainPage/></Outlet>
    },
    {
        path: 'pokemon/:name',
        element: <Outlet><PokemonPage/></Outlet>
    }
 ])
    // const currentUrl = window.location.pathname
    return(
        <>
       
        <RouterProvider router={router}/>
        {/* {currentUrl === '/' ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>} */}
       
        
        </>
    )
}
 
export default App
