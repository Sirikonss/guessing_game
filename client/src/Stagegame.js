import React, { useEffect, useState } from "react";

function Stagegame({ match }) {
  useEffect(() => {
    fetchStage();
  }, []);

  const [combination, setCombination] = useState([]);
  const [count, setCount] = useState(0);
  const [stack, setStack] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const fetchStage = async () => {
    const fetchStage = await fetch(
      `http://localhost:3000/api/stage/${match.params.stageId}`
    );
    const stage = await fetchStage.json();
    setCombination(stage.data.combination);
  };

  function guessOne(char) {
    console.log(char);
    console.log(combination[stack]);
    if (stack <= 3) {
      if (char === combination[stack]) {
        setStack(Number(stack + 1));
        if (stack === 3) {
          setIsWon(true);
        }
      } else {
        setCount(Number(count + 1));
      }
    }
  }

  return (
    <center>
    <div>
      <h1 style={{padding: "10%", paddingBottom: "5%"}}>Guessing Game</h1>
      <center>
      <font size= "80">
      <ul style={{margin: "0px", listStyleType: "none" }}>
        <li style={{display: "inline", padding: "2%" }}>
          {stack > 0 ? combination[0] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 1 ? combination[1] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 2 ? combination[2] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 3 ? combination[3] : "_"}
        </li>
      </ul>
      </font>
      </center>
      {/* controls */}
      
      <ul>
        <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => guessOne("A")}>A</button>
        <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => guessOne("B")}>B</button>
        <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => guessOne("C")}>C</button>
        <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => guessOne("D")}>D</button>
      </ul>
      
      <p style={{fontSize: "30px"}}>Number of unsuccessful try(s): {String(count)}</p>
      <p style={{color: "green", fontSize: "50px", padding: "10px"}}>
        {isWon
          ? `You win !`
          : ""}
      </p>
    </div>
    </center>
  );
}

export default Stagegame;
