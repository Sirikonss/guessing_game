import React from "react";
import { Link } from "react-router-dom";

function Card_init(stage) {
  const card = {
    display: "flex",
    boxSizing: "border-box",
    fontFamily: "Verdana",
    padding: "1%",
    border: "0",
    margin: "1%",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    width: "320px",
    height: "100px",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "DarkSalmon",
    color: "white"
  };

  const cardContent = {
    margin: "auto",
    paddingLeft: "17px",
    color: "white",
  };

  return (
    <div style={card}>
      <Link to={`play/${stage._id}`}>
        <div style={cardContent}>
      <h3 style={{ textDecoration: "none" }}>Stage</h3>
        </div>
      </Link>
    </div>
  );
}

export default Card_init;