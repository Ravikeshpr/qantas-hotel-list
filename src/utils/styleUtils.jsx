import styled, { css } from "styled-components";
export const mediaQueries = ({ sm = "100%", md = "50%", lg = "25%" }) => css`
    width: ${sm};

    @media screen and (min-width: 40%) {
        width: ${md};
    }

    @media screen and (min-width: 52%) {
        width: ${lg};
    }
`;

export const SectionContainer = styled.section`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 1% 5% 1% 3%;
`;
