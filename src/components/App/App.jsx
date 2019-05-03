import React from 'react'
import RD from '../Roll/RollDiv/RollDiv'
import styled from 'styled-components'
import UI from '../UserInfo/UserInfo'
import Header from '../Header/Header'
import EN from '../EnterName/EnterName'

const BDiv = styled.div`
    margin:0;
    padding:0;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: 36px;
`
const Div = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100vw;
`


const App = () => (
    <BDiv>
        <EN/>
        <Header/>
        <Div>
            <RD/>
            <UI/>
        </Div>
    </BDiv>
)

export default App