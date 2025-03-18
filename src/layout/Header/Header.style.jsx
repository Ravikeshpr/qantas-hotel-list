import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 3% 3% 1% 2%;
`;

export const Logo = styled.img`
    width: ${(props) => props.width || "20%"};
    min-width: 100px;
    height: auto;
`;
