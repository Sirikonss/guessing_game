import React, { Component } from "react";
import StageCard from "./Card";
import AddStageCard from "./AddCard";

class App extends Component {
  state = {
    stages: [],
  };
  
  componentDidMount() {
    fetch("http://localhost:3000/api/stage")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ stages: data.data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <center>
          <h1 style={{paddingTop: "3%", color: "IndianRed"}}>Alphabet Guessing Game</h1>
        <div style={{padding: "5%"}}>
          <AddStageCard />
          {this.state.stages.map((stage) => {
            return StageCard(stage);
          })}
        </div>
        </center>
      </div>
    );
  }
}

export default App;
