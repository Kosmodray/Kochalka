import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Actions from '../../../actions/actions'
import {connect} from 'react-redux'

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
    font-size:36px;
    margin:50px;
    background-color:white;
`

const ClearButton = ({Type, ClearClick}) => (
    <Button Type={Type} onClick={() => ClearClick()}>Clear</Button>
)

ClearButton.propTypes = {
    Type: PropTypes.string,
    ClearClick: PropTypes.func.isRequired
}

export default connect(
    state => ({
        Type: state.Type
    }),
    {
        ClearClick: Actions.Clear
    }
)(ClearButton)