import React from "react"
import "/home/tharunreddy1817/practice-react/src/styles.css"


function Die(prop){
  return(
    <button>{prop.value}</button>
  )
}

function generateAllNewDice()
{
  const arr = []
  for(let i=0;i<10;i++)
  {
      const rand = Math.ceil(Math.random() * 6);
      arr.push(rand)
  }
  return arr;
}
function Main(){
  const [diceArr, setDiceArr]= React.useState(generateAllNewDice())
  
  return(
  <main> 
            <div className="dice-container">
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
              <Die value={1}/>
            </div>
          </main>
  )
}
export default function App(){
    return(
       
          <Main />
      
    )
}

