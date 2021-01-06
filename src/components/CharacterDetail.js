import React, {useState, useEffect} from "react";



export default function CharacterDetail({ match }){

    const access_token = 'TsTj0xaaOHt36z7t6NOu';
    //console.log(match.params)

    const [character, setCharacter] = useState({});

    // /character/{id}

    const fetchDetails = async () => {
        //const url = `https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbbf`;
        const url = `https://the-one-api.dev/v2/character/${match.params.id}`;
        
        fetch(url, {
            method: "get",
            headers: new Headers({
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/x-www-form-urlencoded'

            })
        }).then(response => response.json())
        .then(data => {
            console.log("contenue de : ", data.docs[0]);
            setCharacter(data.docs[0])
        });
    }

    useEffect(() => {
        fetchDetails();

    },[]);
       
    return (
        <div>
            <h3>Character detail page</h3>
            <h5>{character.name}</h5>
            <h5>{character.race}</h5>
            
            {/* {statistiques} */}
                    
        </div>
    )
}