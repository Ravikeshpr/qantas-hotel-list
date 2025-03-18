import React from "react";
import qantasLogo from "../../assets/qantas-logo.png";
import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer role="banner">
            <Logo role="logo" src={qantasLogo} alt="Qantas logo" />
        </HeaderContainer>
    );
};

export default Header;
