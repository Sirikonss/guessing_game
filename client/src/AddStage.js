import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AddStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combination: [],
      count: 0,
      isSent: false,
      enableSubmit: false,
    };
    this.addToCombination = this.addToCombination.bind(this);
  }

  addToCombination(char) {
    this.setState(() => ({
      combination: this.state.combination.concat(char),
      count: this.state.count + 1,
    }));
    if (this.state.count >= 3) {
      this.setState(() => ({
        enableSubmit: true,
      }));
    }
  }


  handleSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        combination: this.state.combination,
      }),
    };
    fetch("http://localhost:3000/api/stage", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }))
      .then(() => this.props.history.push(`/play/${this.state.postId}`));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <center>
        <h1 style={{padding: "10%", paddingBottom: "5%"}}>Create Stage</h1>
        <font size= "80">
        <ul style={{ listStyleType: "none" }}>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 0 ? this.state.combination[0] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 1 ? this.state.combination[1] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 2 ? this.state.combination[2] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 3 ? this.state.combination[3] : "_"}
          </li>
        </ul>
        </font>
        <ul>
          <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => this.addToCombination("A")}>A</button>
          <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => this.addToCombination("B")}>B</button>
          <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => this.addToCombination("C")}>C</button>
          <button style={{background: "black",color: "white", padding: "10px",margin: "5px",borderRadius: "5px", fontSize: "20px"}}onClick={() => this.addToCombination("D")}>D</button>
        </ul>
        <input
        style={{margin: "2%",marginLeft: "6%",background: "Brown",color: "white", padding: "10px",borderRadius: "5px", fontSize: "20px"}}
          type="submit"
          value="Submit"
          disabled={!this.state.enableSubmit}
          onClick={this.handleSubmit}
        />
        </center>
      </div>
    );
  }
}

export default AddStage;
