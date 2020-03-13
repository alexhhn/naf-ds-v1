import React from "react";
import "./App.css";
import Button from "./packages/Button/src";
import styled from "styled-components";

function App() {
  const Title = styled.h1`
    color: red;
  `;

  const Paragraph = styled.p`
    font-size: 40px;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <Title>efef</Title>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Paragraph>eefefasefgeufhewiuh</Paragraph>
        <Button>êf</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
