import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [error, seterror] = useState("")
  const [score, setscore] = useState(0)
  const [selectedNum, setselectedNum] = useState();
  const [curDice, setcurDice] = useState(1);
  const [showrules, setshowrules] = useState(false)

  const genrateRandomNumber = (min, max) =>
    {
        return Math.floor(Math.random() * (max-min)+min);
    };

    const rollDice = () => 
    {
        if(!selectedNum)
        {
          seterror("You have not selected any number.");
          return;
        }

        seterror("");

        const randNum = genrateRandomNumber(1,7);

        setcurDice((prev) => randNum);

        if(selectedNum === randNum)
        {
          setscore((prev)=> prev + randNum);
          seterror("You Won 🥳");
        }
        else
        {
          setscore((prev)=> prev - 2)
          seterror("You Lost 😔");
        }

        setselectedNum(undefined)
    };

    const resetScore = () =>
    {
      setscore(0);
      seterror("");
    }

  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore score = {score} />
            <NumberSelector selectedNum = {selectedNum} setselectedNum = {setselectedNum} error = {error} seterror = {seterror} />
        </div>

        <RollDice curDice={curDice} rollDice={rollDice} />

        <div className="btn">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setshowrules(prev => !prev)}>{showrules ? "Hide" : "Show"} Rules</Button>
        </div>
        
        {showrules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    .topSection{
        display: flex;
        justify-content: space-evenly;
        align-items: end;
    }
    .btn{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`

