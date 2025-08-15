import "/home/tharunreddy1817/practice-react/src/styles.css"
import React from "react"
import { languages } from "../languages"
import clsx from "clsx"
import { getFarewellText } from "../farewell"
import { getRandomWord } from "../words"
// @ts-ignore
import Confetti from "react-confetti"
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
    const [currentWord, setCurrentWord] = React.useState(()=>getRandomWord())
 
    const [guessedLetters, setGuessedLetters] = React.useState<string[]>([])

    function addGuessedLetter(letter){
        setGuessedLetters(prev=> prev.includes(letter) ? prev : [...prev, letter])
    }
    
    const wordArr = Array.from(currentWord)
     
    
     const alphabetArr = Array.from(alphabet)

     const wrongGuessCount = guessedLetters.filter(letter=> !currentWord.includes(letter)).length
     const isGameWon = wordArr.every((char)=> guessedLetters.includes(char))
     const isGameLost= wrongGuessCount >= languages.length-1
     const isGameOver = isGameWon || isGameLost
     let buttonDisable = false
    function newGameSetup(){
        buttonDisable=true;
        setGuessedLetters([]);
        setCurrentWord(getRandomWord())
    }

    const spans = wordArr.map((char,index)=>  <span key={index} className={clsx("char",{ missed: isGameLost})}>{(guessedLetters.includes(char) || isGameOver)? char.toUpperCase() : ""}</span>)

     const keyboard = alphabetArr.map((letter,index)=> {
     const isGuessed = guessedLetters.includes(letter)
     const isCorrect = isGuessed && currentWord.includes(letter)
     const isWrong = isGuessed && !currentWord.includes(letter)
     return(
     <button className={clsx({
       correct : isCorrect,
       wrong : isWrong
     })}
      onClick={()=> addGuessedLetter(letter)} 
      key={index} disabled={isGameOver} 
      aria-disabled={guessedLetters.includes(letter)} 
      aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
    </button>
     )})
     

     const chips = languages.map((data, index)=> { 
        const isLost = index < wrongGuessCount
        const className = clsx("chip", isLost && "lost")
        return (<LanguageChip className = {className} name={data.name} color={data.color} backgroundColor={data.backgroundColor} />)})
     
        const needFarewell = !wordArr.includes(guessedLetters[guessedLetters.length-1]) 
     
        const stateClass = clsx("stateSection", {won:isGameWon, lost : isGameLost, farewell: !isGameOver && needFarewell && wrongGuessCount>0} )
   
    

     function renderStateClass(){
        if(!isGameOver){
            if(needFarewell && wrongGuessCount>0){
                return (
                    <p className="farewell-message">{getFarewellText(languages[wrongGuessCount-1].name)}</p>
                )
            }
            else{
                return null;
            }
        }

        if(isGameWon){
            return (
                <>
               <h2>You win!</h2>
                <p>Well done!🎉</p>
                </>
            )
        }else if(isGameLost) {
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
            {isGameWon && <Confetti aria-live="polite"/>}
            <Header/>
            <section  aria-live="polite" className={stateClass}>
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
           {isGameOver && <button  className="newGame" onClick={newGameSetup}>New Game</button>}
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