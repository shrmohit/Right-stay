import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/card-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/SignUp/signUp";
import Login from "./components/login/login";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/filter"
            element={
              <Filter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
