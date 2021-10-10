import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🍪": "Cookie",
  "🍩": "Doughnut",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🥪": "Sandwich",
  "🍕": "Pizza",
  "🍔": "Hamburger"
};

var foodItemsWeKnow = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];
    //console.log(meaning)
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(foodItem) {
    var meaning = emojiDict[foodItem];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler} />
      <h2>The food item name is : {meaning} </h2>

      <h3>Food items we know</h3>
      {foodItemsWeKnow.map(function (foodItem) {
        return (
          <span
            onClick={() => foodClickHandler(foodItem)}
            style={{ fontSize: "1.3rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {foodItem}
          </span>
        );
      })}
    </div>
  );
}
