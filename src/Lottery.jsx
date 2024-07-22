import { useState } from "react";
import { generateRandomNumber, sumFunction } from "./helper";


// export default function Lottery(winCondition) {// note here winCondition is object which contain winCondition as function
export default function Lottery({winCondition}) {// note here winCondition is directly a function
  let [randomNumber, setRandomNumber] = useState(0);
  let [randomNumberSum, setRandomNumberSum] = useState(0);
  console.log(`redendering randomNumber: ${randomNumber}`)
  console.log(`redendering randomNumberSum: ${randomNumberSum}`)
  let randomNumberSumHandler = (x) => {
    let sum = sumFunction(x);
    console.log(sum);
    setRandomNumberSum(sum);
  };
  let randomNumberHandler = () => {
    let x = generateRandomNumber();
    setRandomNumber(x);
    randomNumberSumHandler(x);
  };
  let iswining = winCondition(randomNumberSum);
  // console.log(iswining);
  return (
    <>
      {/* <h1 style={{display : "inline"}}>Lottory Game</h1>
      <p style={{display : "inline"}}>(If sum of digit is 15 then you will win)</p> */}
      
      <h1>Lottory Game</h1>
      <p>(If sum of digit is 15 then you will win)</p>
      <p>Click to generate random number</p>
      <button onClick={randomNumberHandler} style={{ backgroundColor: "gray" }}>
        Buy Ticket
      </button>
      <h3>{randomNumber}</h3>
      <h4>Total sum of Digit : {randomNumberSum}</h4>
      {randomNumberSum === 15 ? (
        <h5>Winner, you have nailed it!</h5>
      ) : (
        <h5>Lose, better try next time</h5>
      )}
    </>
  );
}
