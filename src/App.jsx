import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "./layout";

const StyledH1 = styled.h1`
    color: green;
`;

function App() {
    return (
        <div>
            <StyledH1>App component</StyledH1>
            <DefaultLayout />
        </div>
    );
}

export default App;
