import React from 'react'
import {connect} from 'react-redux'
import Actions from '../../../actions/actions'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Button = styled.button`
    height:50px;
    font-size:36px;
    border: 1px solid black;
    background-color: rgba(0,0,0,0);
    color:white;
`

const ButtonDiv = styled.div`
    display:flex;
    width:600px;
    flex-direction:row;
    justify-content:space-between;
    margin-right:50px;
    box-sizing:border-box;
`

const ChangeType = ({ChangeType}) => (
    <ButtonDiv>
        <Button onClick={()=>ChangeType("PushUps")}>PushUps</Button>
        <Button onClick={()=>ChangeType("SitUps")}>SitUps</Button>
        <Button onClick={()=>ChangeType("Squats")}>Squats</Button>
    </ButtonDiv>
)

ChangeType.propTypes = {
    ChangeType: PropTypes.func.isRequired
}

export default connect(
    null,
    {
        ChangeType: Actions.ChangeType
    }
)(ChangeType)