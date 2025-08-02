import "/project/workspace/src/styles.css";
import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="img"
        src="/images/chef-claude-icon.png"
        alt="chef-claude-icon"
      />
      <h1 className="headName">Chef Claude</h1>
    </header>
  );
}

function Main() {
  let [list, setList] = React.useState([]);
  const ingredientsList = list.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [fav, setFav] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    /*
    Avoid Errors
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").toString() ?? "";
    setList((prev) => (newIngredient ? [...prev, newIngredient] : prev));
    console.log(formData.getAll("iplteam"));
    */
  }

  function handleChange(event) {
    setFav(event.target.value);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
        <fieldset>
          <legend>Favourite IPL Team</legend>
          <label>
            <input
              type="checkbox"
              name="iplteam"
              value="RCB"
              onChange={handleChange}
            ></input>
            RCB
          </label>
          <label>
            <input
              type="checkbox"
              name="iplteam"
              value="MI"
              onChange={handleChange}
            ></input>
            MI
          </label>
          <label>
            <input
              type="checkbox"
              name="iplteam"
              value="SRH"
              onChange={handleChange}
            ></input>
            SRH
          </label>
        </fieldset>
        <label>
          Favorite Cricket Player?
          <select name="favColor" defaultValue="" required>
            <option value="" disabled>
              --Choose a player--
            </option>
            <option value="ABD">ABD</option>
            <option value="Virat">Virat</option>
            <option value="Siraj">Siraj</option>
            <option value="Bumrah">Bumrah</option>
          </select>
        </label>
      </form>
      <p>{fav}</p>
      <ul>{ingredientsList}</ul>
    </main>
  );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
