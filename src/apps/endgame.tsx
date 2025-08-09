import "/home/tharunreddy1817/practice-react/src/styles.css"
import React from "react"
import { languages } from "../languages"
function LanguageChip(props){

   return(
         <span className="chip" style={{backgroundColor: props.backgroundColor ,color:props.color}}>
             {props.name}
         </span>
   )
}

function Header(){
    return(
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the programming safe from Assembly!</p>
        </header>
    )
}


function Main(){
    
    const [currentWord, setCurrentWord] = React.useState("react")
    const chips = languages.map((data)=> <LanguageChip name={data.name} color={data.color} backgroundColor={data.backgroundColor} />)

    const wordArr = Array.from(currentWord)
     const spans = wordArr.map((char,index)=> <span key={index} className="char">{char.toUpperCase()}</span>)
    return (
        <main>
            <div className="stateSection">
                <h2>You win!</h2>
                <p>Well done!🎉</p>         
           </div>
           <div className="languageChips">
           {chips}
           </div>
           <section className="char-section">
           {spans}
           </section>
        </main>
    )
}

export default function App(){
    return(
        <>
        <Header/>
        <Main/>
        </>
    )
}