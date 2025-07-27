import React from "react";
import "/project/workspace/src/styles.css";
import placesArray from "/project/workspace/Travel-Journal/data.js";
type Props = {
  picture: string;
  alt: string;
  country: string;
  link: string;
  name: string;
  time: string;
  info: string;
};

const places = placesArray.map((place) => (
  <Entry
    picture={place.img.src}
    alt={place.img.alt}
    country={place.country}
    link={place.googleMapsLink}
    name={place.title}
    time={place.dates}
    info={place.text}
  />
));
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src="images/globe.png" alt="Globe Image" />
        <span>my travel journal.</span>
      </nav>
    </header>
  );
}

function Entry(props: Props) {
  return (
    <article className="entry">
      <div className="img-container">
        <img className="picture" src={props.picture} alt={props.alt} />
      </div>
      <div className="entrytext">
        <p className="location">
          <img src="images/marker.png" alt="loc-icon" />
          <span className="country">{props.country}</span>
          <a href={props.link}>View on Google Maps</a>
        </p>
        <h2 className="name">{props.name}</h2>
        <h6 className="time">{props.time}</h6>
        <p className="info">{props.info}</p>
      </div>
    </article>
  );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      {places}
    </div>
  );
}
