import "/project/workspace/src/styles.css";

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

function Entry() {
  return (
    <div className="entry">
      <img className="picture" src="/images/mountfuji.jpg" alt="Mount Fuji" />
      <div className="entrytext">
        <p className="location">
          <img src="images/marker.png" alt="loc-icon" />
          <span className="country">JAPAN</span>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
            View on Google Maps
          </a>
        </p>
        <h2 className="name">Mount Fuji</h2>
        <h6 className="time">12 Jan, 2021 - 24 Jan, 2021</h6>
        <p className="info">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      <Entry />
    </div>
  );
}
