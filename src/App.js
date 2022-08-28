import Quote from "./Components/Quote";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const fetchQuote = () => {
    fetch(`https://animechan.vercel.app/api/random`)
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <Quote quote={quote} />
      <button onClick={fetchNewQuote}>Generate</button>
    </div>
  );
}

export default App;
