import { useState } from "react"


export default function LudoBoard(){
    let [move,setMove] = useState({blue :0, yellow: 0, green : 0, red : 0});

    function clickHandlerBlue (){
        // move.blue+=1;
        console.log(move.blue);
        // setMove({...move, blue : move.blue +1});
        setMove((preMove) =>{
            return {...preMove, blue : preMove.blue +1}
        })
    }
    function clickHandlerYellow (){
        setMove((preMove) =>{
            return {...preMove, yellow : preMove.yellow +1}
        })
    }
    function clickHandlerGreen (){
        setMove((preMove) =>{
            return {...preMove, green : preMove.green +1}
        })
    }
    function clickHandlerRed (){
        setMove((preMove) =>{
            return {...preMove, red : preMove.red +1}
        })
    }
    return <>
      <p>Game begin!</p>
      <h3>Blue move : {move.blue}</h3>
     <button style={{backgroundColor : "blue"}} onClick={clickHandlerBlue}>+1</button>
      <h3>Yellow move : {move.yellow}</h3>
      <button style={{backgroundColor : "yellow"}} onClick={clickHandlerYellow}>+1</button>
      <h3>Green move : {move.green}</h3>
      <button style={{backgroundColor : "green"}} onClick={clickHandlerGreen}>+1</button>
      <h3>Red move : {move.red}</h3>
     <button style={{backgroundColor : "red"}} onClick={clickHandlerRed}>+1</button>
    </>
    
}