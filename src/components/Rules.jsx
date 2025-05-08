import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How To Play</h2>
        <div className="text">
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </div>

    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 5px;
    background-color: #FBF1F1;
    padding: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
        font-size: 16px;
    }
`;