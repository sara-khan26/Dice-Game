import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    gap: 10px;
    color: white;
    min-width: 220px;
    border: none;
    background: #000000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.5s;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: #000000;
        transition: 0.5s;
    }

`;

export const OutlineButton = styled(Button)`
    color: black;
    border: 1px solid black;
    background: white;
    transition: 0.5s;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.5s;
    }
`;

