import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Login - https://codepen.io/CodeOpacity/pen/YzjaMde
// Card - https://codepen.io/lauraalpinto/pen/qLzGBX

import Home from "./Components/Home"
import Books from "./Components/Books"
import Notes from "./Components/Notes"
import Questions from "./Components/Questions"
import Err from "./Err"
import Nav from "./Components/Nav"
import Rating from './Components/Rating'
import Loader from "./Components/Loader"
import { AppContext } from "./contextLib";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [ratingopen, setRatingopen] = useState(false)
  const [error, setError] = useState(false)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://mocki.io/v1/efd26afd-4f7c-4d1b-a3df-644494c48995`)
      .then((response) => response.json())
      .then((actualData) => { setData(actualData);console.log("data loaded") })
      .catch((err) => {
        console.log(err.message);
        alert(err.message)
        setError(true);
      });
  }, [])

  useEffect(() => {
    const wait = async (time) => {
      await sleep(time);
      setRatingopen(true);
    }
    wait(60000)
  },[])

  useEffect(() => {
    const wait = async () => {
      setIsLoading(true)
      await sleep(1500);
      setIsLoading(false)
    }
    wait()
  },[])

  return (
    <>
      <AppContext.Provider value={{ data, isLoading, setIsLoading, search, setSearch, ratingopen, setRatingopen, error, setError }}>
        {isLoading ? (
          <>
            <br /><br />
            <Loader />
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
        <Rating />
      </AppContext.Provider>
    </>
  );
}

export default App;
