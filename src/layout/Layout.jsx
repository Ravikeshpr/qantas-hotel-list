import React from "react";
import { MainContainer } from "./Layout.style";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <MainContainer>
                <Header />
                <main data-testid="main-content">{children}</main>
            </MainContainer>
        </>
    );
}

export default Layout;
