import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <div className="countries">
        <h1g>The details and lis of the all country yp</h1g>
        {}
      </div>
    </>
  );
}

export default App;
