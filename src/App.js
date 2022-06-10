import { useState } from "react";
import "./styles.css";

const place = {
  Tamilnadu: [
    { Madurai: "Stunning Architecture" },
    { Rameshwaram: "Temple Hopping" },
    { Mahabalipuram: "Magnificent Carved Temples" }
  ],
  Karnataka: [
    { Bangalore: "The City of Diverse Existence" },
    { Mysore: "City of Old World Charm" },
    { Gokarna: "Tranquility at its Best" }
  ],
  Kerala: [
    { Kovalam: "Bypass Goa for Kovalam" },
    { Alleppey: "Get enamored with India's Own Venice" },
    { Munnar: "Walk amidst the rolling carpets of greenery." }
  ]
};
export default function App() {
  const [show, setShow] = useState("Tamilnadu");
  function getData() {
    if (show in place)
      return (
        <div>
          {place[show].map((loc) => (
            <Location key={Object.keys(loc)} obj={loc} />
          ))}
        </div>
      );
    else return "Nothing to display";
  }
  function tabs() {
    const array = Object.keys(place);
    return array.map((place) => (
      <div
        key={place}
        className={show === place ? "selected" : ""}
        onClick={() => setShow(place)}
      >
        {place}
      </div>
    ));
  }
  return (
    <div className="App">
      <h1>Best Places to Visit in South India</h1>
      <hr />
      <div className="nav">{tabs()}</div>
      <div className="list">{getData()}</div>
    </div>
  );
}
function Location({ obj }) {
  const key = Object.keys(obj)[0];
  return (
    <div className="location">
      <div className="location-name">{key}</div>
      <div className="location-detail">{obj[key]}</div>
    </div>
  );
}
