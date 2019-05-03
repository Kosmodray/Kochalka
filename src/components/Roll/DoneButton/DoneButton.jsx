import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Actions from '../../../actions/actions'

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
    font-size:28px;
    display:${props => props.DoneClicked ? "none" : "block"};
`

const DoneButton = ({DoneClick, DoneClicked, Type}) => (
    <Button Type={Type} DoneClicked={DoneClicked} onClick={()=>DoneClick()}>Done</Button>
)



export default connect(
    state => ({
        Type: state.Type,
        DoneClicked: state.DoneClicked
    }),
    {
        DoneClick: Actions.Done,
    }
)(DoneButton);