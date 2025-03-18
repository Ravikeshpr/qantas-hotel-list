import styled from "styled-components";
import { SectionContainer } from "../../utils/styleUtils";
export const HotelInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    min-width: 79%;
`;

export const NameAndRatingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;
    padding: 0px;
    word-break: break-word;
    width: 100%;
`;
export const HotelNameAndAddressContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    word-break: break-word;
`;
export const StyledName = styled.p`
    white-space: nowrap;
    max-width: 445px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 0px;
`;
export const StyledAdress = styled.address`
    color: gray;
    text-decoration: none;
    word-break: break-word;
    font-size: 16px;
`;

export const StyledOffer = styled.p`
    color: red;
    text-decoration: underline;
    font-size: 16px;
`;
export const StyledCancellationPolicy = styled.p`
    color: green;
    font-size: 14px;
    margin: 0;
`;
