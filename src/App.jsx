import React, { useEffect, useState, useRef } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Resp from "./Components/Responce/Resp";

const initialState = {
  city: "New York",
  temperature: "",
  feels: "",
};

export default function App() {
  const [data, setData] = useState(initialState);
  const inpt = useRef("");

  useEffect(() => UpdateData(), []);

  function UpdateData() {
    MakeApiRequest(data.city);
  }

  function UpdateTemperatures() {
    MakeApiRequest(inpt.current.value);
  }

  function MakeApiRequest(city) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1180ab00683e034128e5f97cd98f6179`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setData({
          city: data.name,
          temperature: data.main.temp,
          feels: data.main.feels_like,
        });
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
        setData(initialState);
      });
  }

  return (
    <div className="container-fluid">
      <Header />
      <div id="app" className="block-input">
        <label className="inpt-label ">Choose city</label>
        <input ref={inpt} className="inpt" type="text" placeholder="New York" />
        <button
          id="main-btn"
          type="submit"
          class="btn btn-outline-dark"
          onClick={UpdateTemperatures}
        >
          Show
        </button>
      </div>
      <div className="container-result">
        <Resp city={data.city} temp={data.temperature} feel={data.feels} />
      </div>
    </div>
  );
}
