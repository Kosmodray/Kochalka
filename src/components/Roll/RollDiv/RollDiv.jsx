import React from 'react'
import RB from '../RollButton/RollButton'
import RV from '../RollValue/RollValue'
import DB from '../DoneButton/DoneButton'
import styled from 'styled-components'

const RollDivStyled = styled.div`
    width:85vw;
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const RollDiv = () => (
    <RollDivStyled>
        <RV/>
        <RB/>
        <DB/>
    </RollDivStyled>
)

export default RollDiv