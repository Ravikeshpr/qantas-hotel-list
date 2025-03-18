import React from "react";
import qantasLogo from "../../assets/qantas-logo.png";
import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer role="banner">
            <Logo tabIndex={0} src={qantasLogo} alt="Qantas logo" />
        </HeaderContainer>
    );
};

export default Header;
