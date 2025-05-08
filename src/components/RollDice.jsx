import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const RollDice = ({curDice, rollDice}) => {
    
  return (
    <>
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`images/dice/dice_${curDice}.png`} alt="dice_1" />
            </div>
            <p>Click On The Dice To Roll!</p>
        </DiceContainer>
    </>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-weight: 500;
    }
`