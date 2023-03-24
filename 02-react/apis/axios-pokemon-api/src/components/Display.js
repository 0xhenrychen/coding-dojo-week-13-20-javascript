import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = () => {
    
    const [pokemon, setPokemon] = useState([]);

     // ! Using axios for this assignment, Axios Pokemon API.
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            // console.log("RESPONSE");
            // console.log(response);
            // console.log(response.data.results);
            setPokemon(response.data.results);
        })
        .catch((error) => {
            console.log("ERROR");
            console.log(error);
        })
    })

    // ! Using fetch from the last (practice) assignment, Pokemon API.
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(response => {
    //         // not the actual JSON response body but the entire HTTP response
    //         return response.json();
    //     }).then(response => {
    //         // we now run another promise to parse the HTTP response into usable JSON
    //         console.log(response.results);
    //         setPokemon(response.results);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }, []);

    return (
        <div>
            <h1>Axios Pokemon API</h1>
            <ol>
            {
                // ! 2 different ways to write the same thing. One with () and another with return {()}.
                // pokemon.map((eachPokemon, index) => (
                //     <li key={index}>
                //         <h3>{eachPokemon.name}</h3>
                //     </li>
                // ))
                pokemon.map((eachPokemon, index) => {
                    return (
                        <li key={index}>
                            <h3>{eachPokemon.name}</h3>
                        </li>    
                    )
                })
            }
            </ol>
        </div>
    );
}

export default Display;