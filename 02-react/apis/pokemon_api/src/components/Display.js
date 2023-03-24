import React, {useState, useEffect} from 'react';

const Display = () => {
    
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response.results);
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    
    return (
        <div>
            <h1>Pokemon API</h1>
            <ul>
            {
                pokemon.map((eachPokemon, index) => (
                    <li key={index}>
                        {eachPokemon.name}
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Display;
