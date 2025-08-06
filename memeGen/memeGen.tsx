import "/home/tharunreddy1817/practice-react/memeGen/meme.css";
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

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=> setAllMemes(data.data.memes))
    },[])

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prev=> ({...prev,[name]:value}))
        
    }
    function handleClick(){
        const randomNumer = Math.floor(Math.random()*(allMemes.length))
        const newUrl = allMemes[randomNumer].url
        setMeme((prev)=> ({...prev, imageUrl: newUrl}))
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
                <button onClick={handleClick}>Get a new meme image 🖼</button>
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