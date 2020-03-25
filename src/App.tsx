import React from "react";
import "./App.css";
import Button from "./packages/Button/src";
import Badge from "./packages/Badge/src";
import styled from "styled-components";

function App() {
  return (
    <LayoutWrapper>
      <header className="App-header">
        <Button>Test Button</Button>
        <Badge
          color={"black"}
          backgroundColor={"white"}
          onClick={() => { }}
          hasFocusOutline={false}
        >
          badge
        </Badge>
      </header>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  padding: 20px;
`;

export default App;
