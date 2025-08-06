import React from "react"
import "/home/tharunreddy1817/practice-react/src/styles.css"


function Die(props){
  const styles={
    backgroundColor : props.isHeld ? "#59E391" : "white"
  }
  return(
    <button style={styles}>{props.value}</button>
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
  const [diceArr, setDiceArr]= React.useState(generateAllNewDice())

  const allDiceElements = diceArr.map(obj=> <Die  key={obj.key} value={obj.value} isHeld={obj.isHeld} />)
  
   function rollDice(){
       setDiceArr(generateAllNewDice())
   }

  return(
        <main> 
            <div className="dice-container">
             {allDiceElements}
            </div>
            <button className="roll" onClick={rollDice}>Roll</button>
          </main>
  )
}
export default function App(){
    return(
       
          <Main />
      
    )
}

