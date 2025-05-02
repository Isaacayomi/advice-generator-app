// import "./index.css";

import { useEffect } from "react";

// const slip = {
//   advise: "The number of vampires in the average home",
//   id: 68,
// };

function App() {
  return <MainContainer />;
}

function MainContainer() {
  // const [id, setId] = useState("");
  // const [advise, setAdvise] = useState("");
  // useEffect(function () {
  //   async function getAdvise() {
  //     const res = await fetch("https://api.adviceslip.com/advice");
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   getAdvise();
  // }, []);

  return (
    <div>
      {/* <p>{data.id}</p> */}
      {/* <p>{data.advise}</p> */}

      <img src="images/pattern-divider-desktop.svg" alt="pattern divider" />
      <img src="images/icon-dice.svg" alt="dice icon" />
    </div>
  );
}

export default App;
