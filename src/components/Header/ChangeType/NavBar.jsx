import React from 'react'
import {connect} from 'react-redux'
import actions from '../../../actions/actions'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { UI_COLORS_DICT } from '../../../lib/dict'

const Button = styled.button`
    font-size:16px;
    background-color: ${props => UI_COLORS_DICT[props.type]};
    color:white;
    border: none;
    height:50px;
    vertical-align:center;
    text-align:center;
    margin-right:50px;
    padding: 0 15px 0 15px;
    box-sizing:border-box;
    user-select: none;
    &:active, &:focus {
        outline: none;
    }
`

const ButtonDiv = styled.div`
    display:flex;
    width:auto;
    flex-direction:row;
    margin-right:50px;
    box-sizing:border-box;
`

const NavBar = ({changeType}) => (
    <ButtonDiv>
        <Button type="pushUps" onClick={()=>changeType("pushUps")}>PushUps</Button>
        <Button type="sitUps" onClick={()=>changeType("sitUps")}>SitUps</Button>
        <Button type="squats" onClick={()=>changeType("squats")}>Squats</Button>
    </ButtonDiv>
)

NavBar.propTypes = {
    сhangeType: PropTypes.func.isRequired
}

export default connect(
    null,
    {
        changeType: actions.changeType
    }
)(NavBar)