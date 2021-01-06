import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


// LOTR API
// https://the-one-api.dev/documentation
// Registered email address: thecrosswebear@gmail.com

// Access token: TsTj0xaaOHt36z7t6NOu (Include this in your API calls!)

//All routes must be prefixed with https://the-one-api.dev/v2. Only the /book endpoint is available without authentication.


export default function Shop(){

    const [characters, setCharacters] = useState([]);

    const access_token = 'TsTj0xaaOHt36z7t6NOu';
    

    // const fetchBooks = async () => {
    //     const url = `https://the-one-api.dev/v2/book`;
    //     const response = await fetch(url);
    //     const resp = await response.json();
    //     console.log(resp.docs);
    //     setBooks(resp.docs)
    // }

   
    const fetchCharacters = async () => {
        const url = `https://the-one-api.dev/v2/character?limit=10`;
        
        fetch(url, {
            method: "get",
            headers: new Headers({
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/x-www-form-urlencoded'

            })
        }).then(response => response.json())
        .then(data => {
            console.log(data.docs);
            setCharacters(data.docs)
        });
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div>
            <h3>Shop page</h3>
            {characters.map(character => (
               <h4 key={character._id}>
                   <Link to={`/shop/${character._id}`}>{character.name}</Link>
                </h4> 
            ))}
            
        </div>
    )
}