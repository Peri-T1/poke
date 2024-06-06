import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// const PokemonPage = (props) => {

    // const {pokemonUrl} = props
    const PokemonPage = () => {
    const [pokemonData, setPokemonData] = useState(null)

    const location = useLocation()

    const pokemonUrl = location.pathname.split("/").pop()
    const handleGetPokemon = async() =>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonUrl)
        const result = await response.json()
        setPokemonData(result)
    }

    useEffect(() => {
        handleGetPokemon()
    },[])

    // useEffect(() => {
    // console.log(pokemonData)
    // }, [pokemonData])

    return (
    <>
<h1>{pokemonData?.name}</h1>
<img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
<p>{pokemonData?.order}</p>
    </>
    )
}

export default PokemonPage