import "/home/tharunreddy1817/practice-react/src/styles.css";
import React from "react"


function Header(){
    return(
    <header className="header">
        <img className="troll-face" src="/images/troll-face.png" alt="troll-face"/>
        <h1>Meme Generator</h1>
    </header>
    )
    }
    

function Main(){
    const [meme,setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"

    })

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prev=> ({...prev,[name]:value}))
        
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

export default function App() {
    
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}
