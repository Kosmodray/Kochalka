import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import Actions from '../../../actions/actions'
import PropTypes from 'prop-types';

const Button = styled.button`
    border: 1px solid ${props => {
        switch(props.Type){
            case 'PushUps':
                return 'rgb(66, 176, 244)'
            case 'SitUps':
                return 'rgb(101, 244, 66)'
            case 'Squats':
                return 'rgb(214, 167, 0)'
            default:
                return 'black'
        }}
    };
    background-color: white;
    font-size:36px;
    margin:50px;
`

const RollButton = ({RollClick, Type}) => (<Button Type={Type} onClick={RollClick}>ROLL</Button>)

RollButton.propTypes = {
    Type: PropTypes.string,
    RollClick: PropTypes.func.isRequired
}

export default connect(
    state => ({
        Type: state.Type
    }),
    {
        RollClick: Actions.Roll
    }
)(RollButton);