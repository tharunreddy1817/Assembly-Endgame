import { PROVIDERS_OR_POLICIES } from "@huggingface/inference";
import "/home/tharunreddy1817/practice-react/src/styles.css";
import React from "react";
import { getRecipeFromMistral } from "../ai";

type ClaudeRecipeProps={
  recipe:string;
}
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

function IngredientsList(props) {
  const ingredientsList = props.list.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      {props.list.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button aria-label="get-a-recipe" onClick={props.getRecipe}>
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}

function ClaudeRecipe({recipe}:ClaudeRecipeProps) {

  return (
    <section>
      {recipe}
    </section>
  );
}
function Main() {
  const [list, setList] = React.useState([]);
  const ingredientsList = list.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipe, setRecipe] = React.useState("");
   async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(list)
    setRecipe(recipeMarkdown);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").toString() ?? "";
    setList((prev) => (newIngredient ? [...prev, newIngredient] : prev));
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
      </form>
      {list.length > 0 && (
        <IngredientsList list={list} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      Hello
    </div>
  );
}
