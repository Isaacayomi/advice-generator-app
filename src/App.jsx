// import "./index.css";

import { useState } from "react";

// const slip = {
//   advise: "The number of vampires in the average home",
//   id: 68,
// };

function App() {
  return <MainContainer />;
}

function MainContainer() {
  const [id, setId] = useState("");
  const [advise, setAdvise] = useState(
    "The secret to happiness is to be happy with yourself"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState();

  async function getAdvise() {
    setError("");
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      console.log(data);
      setId(data.slip.id);
      setAdvise(data.slip.advice);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={isLoading ? "text-slate-400" : ""}>
      <p>{id ? `ADVISE ${id}` : "ADVISE 217"}</p>
      <p>"{advise}"</p>

      <img src="images/pattern-divider-desktop.svg" alt="pattern divider" />
      <img
        role="button"
        onClick={getAdvise}
        src="images/icon-dice.svg"
        alt="dice icon"
        className={isLoading ? "animate-spin" : ""}
      />
    </div>
  );
}

export default App;
