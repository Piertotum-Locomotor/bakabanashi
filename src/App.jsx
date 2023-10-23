import { useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {
    const strX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]; 
    const strY = ["the soup kitchen", "Disneyland", "the White House"]; 
    const strZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]; 
    const showStory = false;
    const [xItem, setX] = useState(strX[0]);
    const [yItem, setY] = useState(strY[0]);
    const [zItem, setZ] = useState(strZ[0]);
    const ukus = "us";
    const [name, setName] = useState("Bob");

    function handleButton(event) {
      event.preventDefault();

      setX(randomValueFromArray(strX));
      setY(randomValueFromArray(strY));
      setZ(randomValueFromArray(strZ));

      const nameField = event.target.elements.customName;
      if (nameField != null) setName(nameField.value);

      //showStory = true;
    }

    function handleCheck() {
      //ukus === "us" ? ukus = "uk" : ukus = "us";
    }

    return (
      <>
      <form onSubmit={handleButton}>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" name="customName" className="customName" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} onChange={handleCheck}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={handleCheck}/>
        </div>
        <div>
          <button>Generate random story</button>
        </div>
        </form>
        {showStory && (
          <p>
            It was {ukus === "us" ? <>94 fahrenheit</> : <>{Math.round(5/9 * (94 - 32))} centigrade</>} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}. 
            {name} saw the whole thing, but was not surprised — {xItem} weighs {ukus === "us" ? <>300 pounds</> : <>{Math.round(300/14)} stone</>}
            , and it was a hot day.
          </p>
        )}
      </>
    );
  }