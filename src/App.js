import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./Components/Home"
import Books from "./Components/Books"
import Notes from "./Components/Notes"
import Questions from "./Components/Questions"
import Err from "./Err"
import Nav from "./Components/Nav"
import { AppContext } from "./contextLib";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [ratingopen, setRatingopen] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://mocki.io/v1/efd26afd-4f7c-4d1b-a3df-644494c48995`)
      .then((response) => response.json())
      .then((actualData) => { setData(actualData); setIsLoading(false) })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <>
      <AppContext.Provider value={{ data, isLoading, setIsLoading, search, setSearch, ratingopen, setRatingopen }}>
        {isLoading ? (
          <>
            <br /><br />
            <div className="Loader">
              <img src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif" alt="" />
            </div>
          </>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="*" element={<Err />} />
            </Routes>
          </BrowserRouter>
        )}
      </AppContext.Provider>
    </>
  );
}

export default App;
