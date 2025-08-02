import "/project/workspace/src/styles.css";
import placesArray from "../travel.js";

type props = {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
};

const places = placesArray.map((place) => <Entry key={place.id} {...place} />);

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

function Entry(props: props) {
  return (
    <article className="entry">
      <div className="img-container">
        <img className="picture" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="entrytext">
        <p className="location">
          <img src="images/marker.png" alt="loc-icon" />
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </p>
        <h2 className="name">{props.country}</h2>
        <h6 className="time">{props.dates}</h6>
        <p className="info">{props.text}</p>
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
