import React from 'react'
import styled from 'styled-components'
import CB from './ClearButton/ClearButton'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const UI = styled.div`
    height:90vh;
    width:15vw;
    display:flex;
    flex-direction:column;
    padding:10px;
    font-size:24px;
    border: ${props => {
        switch(props.type){
            case 'PushUps':
                return '1px solid rgb(66, 176, 244)'
            case 'SitUps':
                return '1px solid rgb(101, 244, 66)'
            case 'Squats':
                return '1px solid rgb(214, 167, 0)'
            default:
                return '1px solid black'
        }
    }};
`
const InfoHead = styled.h3`
    color: ${props => {
        switch(props.type){
            case 'PushUps':
                return 'rgb(66, 176, 244)'
            case 'SitUps':
                return 'rgb(101, 244, 66)'
            case 'Squats':
                return 'rgb(214, 167, 0)'
            default:
                return 'black'
        }
    }};
    margin-bottom: 0px;
`


const UserInfo = ({PushUps, SitUps, Squats, ClearClick, Name, Type}) => (
    <UI type={Type}>
        <span>Name: {Name}</span>
        <InfoHead type='PushUps'>PushUps</InfoHead>
            <span>Push Ups quantity: {PushUps.Quantity} </span>
            <span>Record: {PushUps.Record} </span>
        <InfoHead type='SitUps'>SitUps</InfoHead>
            <span>Sit Ups quantity: {SitUps.Quantity} </span>
            <span>Record: {SitUps.Record} </span>
        <InfoHead type='Squats'>Squats</InfoHead>
            <span>Squats quantity: {Squats.Quantity} </span>
            <span>Record: {Squats.Record} </span>
        <CB/>
    </UI>
)

UserInfo.propTypes = {
    PushUps: PropTypes.object,
    SitUps: PropTypes.object,
    Squats: PropTypes.object,
    Name: PropTypes.string,
    Type: PropTypes.string
}

export default connect(
    state => ({
        PushUps: state["PushUps"],
        SitUps: state["SitUps"],
        Squats: state["Squats"],
        Name: state.Name,
        Type: state.Type
    })
)(UserInfo)