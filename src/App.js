import "./styles.css";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 16px;
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  ${(props) =>
    props.primary &&
    css`
      color: blue;
    `}
    ${(props) =>
      props.secondary &&
      css`
        color: green;
      `}
    ${(props) =>
      props.Pink &&
      css`
        background: pink;
        color: white;
      `}
`;

export default function App() {
  var [btnName, getBtnName] = useState("");
  const OnButtonClick = (event) => {
    getBtnName(event.target.textContent);
  };
  return (
    <div className="App">
      <h1>Hello Fiona</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button primary onClick={OnButtonClick}>
        Primary Button
      </Button>
      <Button secondary onClick={OnButtonClick}>
        Secondary Button
      </Button>
      <Button onClick={OnButtonClick}>Normal button</Button>
      <Button Pink onClick={OnButtonClick}>
        Pink Button
      </Button>
      {btnName.length > 0 && <p>{btnName} Clicked</p>}
    </div>
  );
}
