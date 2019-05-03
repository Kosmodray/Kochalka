import React from 'react'
import styled from 'styled-components'
import CB from './ClearButton'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { UI_COLORS_DICT } from '../../lib/dict'

const UI = styled.div`
    height:90vh;
    width:15vw;
    display:flex;
    flex-direction:column;
    padding:10px;
    font-size:14px;
    padding-top:2%;
    box-sizing:border-box;
    @media only screen and (max-width: 900px) {
        height: 100%;
        width: 40%;
        font-size:12px;
        padding-top:5%;
    }
`
const InfoHead = styled.h3`
    color: ${props => UI_COLORS_DICT[props.type]};
    margin-bottom: 0px;
`


const UserInfo = ({pushUps, sitUps, squats, name, type}) => (
    <UI type={type}>
        <span>Name: {name}</span>
        <InfoHead type='pushUps'>PushUps</InfoHead>
            <span>Quantity: {pushUps.quantity} </span>
            <span>Record: {pushUps.record} </span>
        <InfoHead type='sitUps'>SitUps</InfoHead>
            <span>Quantity: {sitUps.quantity} </span>
            <span>Record: {sitUps.record} </span>
        <InfoHead type='squats'>Squats</InfoHead>
            <span>Quantity: {squats.quantity} </span>
            <span>Record: {squats.record} </span>
        <CB/>
    </UI>
)

UserInfo.propTypes = {
    pushUps: PropTypes.object,
    sitUps: PropTypes.object,
    squats: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string
}

export default connect(
    state => ({
        pushUps: state["pushUps"],
        sitUps: state["sitUps"],
        squats: state["squats"],
        name: state.name,
        type: state.type
    })
)(UserInfo)