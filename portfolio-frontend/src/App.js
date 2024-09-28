import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/")
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>FastAPI + React</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
