import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({error, seterror, selectedNum, setselectedNum}) => {

    const numberSelectHandler = (val) =>
    {
        setselectedNum(val);
        seterror("");
    }

    const arrNum = [1,2,3,4,5,6];

  return (
    <>
        <NumberSelcetor>

        <h4>{error}</h4>
        <div className="flex">
            {arrNum.map((val, idx) => (
                <Box key={idx} onClick={() => numberSelectHandler(val)} isSelected = {val === selectedNum}> 

                {val} 
                
                </Box>))}
            </div>

            <p>Select Number</p>
        </NumberSelcetor>
    </>
  )
}

export default NumberSelector

const NumberSelcetor = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
    h4{
        color: red;
    }
`


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;

    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    transition: ${(props) => props.isSelected ? "0.3s" : "0.3s"};
    cursor: ${(props) => !props.isSelected ? "pointer" : ""};
`