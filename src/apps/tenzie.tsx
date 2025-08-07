import React from "react"
import "/home/tharunreddy1817/practice-react/src/styles.css"
// @ts-ignore
import Confetti from "react-confetti"


function Die(props){
  const styles={
    backgroundColor : props.isHeld ? "#59E391" : "white"
  }
  return(
    <button style={styles} onClick={props.hold}>{props.value} </button>
  )
}

function generateAllNewDice()
{
  const arr = []
  for(let i=0;i<10;i++)
  {
      
      arr.push({
        key:i,
        value:Math.ceil(Math.random() * 6), isHeld:false
      })
  }
  return arr;
}
function Main(){
  const [diceArr, setDiceArr]= React.useState(()=>generateAllNewDice())

  let gameWon = true;
  let num =diceArr[0].value
  for(let i=0;i<diceArr.length;i++)
  {
    if(diceArr[i].isHeld != true || diceArr[i].value != num)
    {
      gameWon = false;
      break;
    }
  }

  const allDiceElements = diceArr.map(obj=> <Die  key={obj.key} value={obj.value} isHeld={obj.isHeld} hold ={()=>hold(obj.key)} />)
  
   function rollDice(){
       gameWon ? setDiceArr(generateAllNewDice) :
       setDiceArr(prev=> prev.map(dice => dice.isHeld ? dice : {...dice, value:Math.ceil(Math.random() * 6)}))
   }

   function hold(id){
     setDiceArr(prev=> prev.map(dice =>
      dice.key === id ? {...dice, isHeld : !dice.isHeld } : dice
     ))
   }
  return(
        <main> 
          {gameWon && <Confetti/>}
           <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
             {allDiceElements}
            </div>
            <button className="roll" onClick={rollDice} >{gameWon ? "New Game" : "Roll"}</button>
          </main>
  )
}
export default function App(){
    return(
       
          <Main />
      
    )
}

