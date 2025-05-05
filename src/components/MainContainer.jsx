import { useState } from "react";
import Loader from "./Loader";
function MainContainer() {
  const [id, setId] = useState("");
  const [advise, setAdvise] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function getAdvise() {
    setError("");
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("HTTP request failed");
      const data = await res.json();
      if (!data?.slip?.advice) {
        throw new Error("Cannot get advice");
      }

      console.log(data);
      setId(data.slip.id);
      setAdvise(data.slip.advice);
    } catch (err) {
      console.log(err);
      setAdvise("Please try again");
      setId("☹️");
      if (err.message === "Failed to fetch") {
        setError("Please check your internet connection ☹️");
      } else {
        setError("Something went wrong ☹️");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="relative border border-transparent rounded-xl max-h-full max-w-sm w-full md:max-w-md mx-auto bg-blue900 px-2 pb-14">
        <p className=" text-green300 text-slipNo mt-8 text-center font-extrabold tracking-[0.25rem]">
          {id ? `${error ? "" : "ADVISE"} #${id}` : "ADVISE #117"}
        </p>
        <h1 className="text-quote font-bold text-blue200 text-center my-5">
          {isLoading ? <Loader /> : `${advise}`}
        </h1>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <img src="images/pattern-divider-desktop.svg" alt="pattern divider" />
        <button
          className={`bg-green300 rounded-full p-4 absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 outline-none hover:shadow-buttonShadow ease-linear duration-200 `}
          onClick={getAdvise}
          disabled={isLoading}
        >
          <img
            src="images/icon-dice.svg"
            alt="dice"
            className={`w-4 ${isLoading ? "animate-spin" : ""}`}
          />
        </button>
      </div>
    </>
  );
}

export default MainContainer;
