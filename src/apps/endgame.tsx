import "/home/tharunreddy1817/practice-react/src/styles.css"
import React from "react"
import { languages } from "../languages"
import clsx from "clsx"
function LanguageChip(props){

   return(
         <span className={props.className} style={{backgroundColor: props.backgroundColor ,color:props.color}}>
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
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const [currentWord, setCurrentWord] = React.useState("react")
 
    const [guessedLetters, setGuessedLetters] = React.useState([])

    function addGuessedLetter(letter){
        setGuessedLetters((prev)=> prev.includes(letter) ? prev : [...prev, letter])
    }
    
    const wordArr = Array.from(currentWord)
     const spans = wordArr.map((char,index)=>  <span key={index} className="char">{guessedLetters.includes(char) ? char.toUpperCase() : ""}</span>)
    
     const alphabetArr = Array.from(alphabet)
     const keyboard = alphabetArr.map((letter,index)=> {
     const isGuessed = guessedLetters.includes(letter)
     const isCorrect = isGuessed && currentWord.includes(letter)
     const isWrong = isGuessed && !currentWord.includes(letter)
     return(
     <button className={clsx({
       correct : isCorrect,
       wrong : isWrong
     })} onClick={()=> addGuessedLetter(letter)} key={index} >{letter.toUpperCase()}</button>
     )})
     const wrongGuessCount = guessedLetters.filter(letter=> !currentWord.includes(letter)).length
     const isGameWon = wordArr.every((letter)=> guessedLetters.includes(letter))
     const isGameLost= wrongGuessCount >= languages.length-1
     const isGameOver = isGameWon || isGameLost

     const chips = languages.map((data, index)=> { 
        const isLost = index < wrongGuessCount
        const className = clsx("chip", isLost && "lost")
        return (<LanguageChip className = {className} name={data.name} color={data.color} backgroundColor={data.backgroundColor} />)})
     const stateClass = clsx("stateSection", {won:isGameWon, lost : isGameLost} )

     function renderStateClass(){
        if(!isGameOver){
            return null
        }

        if(isGameWon){
            return (
                <>
               <h2>You win!</h2>
                <p>Well done!🎉</p>
                </>
            )
        }else {
            return (
                <>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly😭</p> 
                </>
            )
        }
     }
     return (
        <main>
            <Header/>
            <section className={stateClass}>
              {renderStateClass()}       
           </section>
           <div className="languageChips">
           {chips}
           </div>
           <section className="char-section">
           {spans}
           </section>
           <section className="keyboard">
            {keyboard}
           </section>
           {isGameOver && <button  className="newGame" onClick={()=> {setGuessedLetters([])}}>New Game</button>}
        </main>
    )
}

export default function App(){
    return(
        <>
        <Main/>
        </>
    )
}