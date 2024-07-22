import { useEffect, useState } from "react";

export default function Joker (){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let getjokes = async () =>{
        let res = await fetch(URL);
        let jsonResponse = await res.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    let [joke, setJoke] = useState({
        setup : "",
        punchline : ""
    });
    
    useEffect(() =>{
        async function firstjoke(){
            let res = await fetch(URL);
        let jsonResponse = await res.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        firstjoke();
    },[]);
    return <>
    <div>
    <h2>Joker!</h2>
    <h3>{joke.setup}</h3>
    <h3>{joke.punchline}</h3>
    <button onClick={getjokes}>New Joke</button>
    </div>
    </>
}