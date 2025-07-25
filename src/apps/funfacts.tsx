import React from "react";
import "/project/workspace/src/styles.css";

function Header() {
  return (
    <header className="header">
      <img src="reactnbg.png" width="60px" alt="React Logo" />
      <nav>
        <ul className="nav">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default function FunFacts() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}
