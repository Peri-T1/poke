import MainPage from "./pages/MainPages"
import PokemonPage from "./pages/PokemonPages"
import Header from "./components/Header"

const App = () => {

    const currentUrl = window.location.pathname
    return(
        <>
        <Header/>
        {currentUrl === '/' ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>}
       
        
        </>
    )
}
 
export default App
