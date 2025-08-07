import React from "react"
import "/home/tharunreddy1817/practice-react/src/styles.css"
// @ts-ignore
import Confetti from "react-confetti"


function Die(props){
  const styles={
    backgroundColor : props.isHeld ? "#59E391" : "white"
  }
  return(
    <button 
    style={styles} 
    onClick={props.hold}
    aria-pressed= {props.isHeld}
    aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value} 
      </button>
  )
}

function generateAllNewDice()
{
  const arr = []
  for(let i=0;i<10;i++)
  {
      
      arr.push({
        key:i,
        value: Math.ceil(Math.random() * 6), isHeld:false
      })
  }
  return arr;
}
function Main(){
  const [diceArr, setDiceArr]= React.useState(()=>generateAllNewDice())
  const [counter, setCounter]=React.useState(()=>{
    return 0;
  })
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
  
  const newGameButton = React.useRef(null)
  React.useEffect(()=>{
     newGameButton.current.focus()
  },[gameWon])
   function rollDice(){
       gameWon? setCounter(0): setCounter((prev)=> prev+1);
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
          <div aria-live="polite" className="sr-only">
            {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
          </div>
           <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
             {allDiceElements}
            </div>
            <span className="roll-counter">Roll counter : {counter}</span>
            <button ref ={newGameButton} className="roll" onClick={rollDice} >{gameWon ? "New Game" : "Roll"}</button>
          </main>
  )
}
export default function App(){
    return(
       
          <Main />
      
    )
}

