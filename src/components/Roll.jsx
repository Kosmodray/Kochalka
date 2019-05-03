import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../actions/actions'
import { UI_COLORS_DICT } from '../lib/dict'

const Button = styled.button`
    border: 1px solid ${props => UI_COLORS_DICT[props.type]};
    background-color: white;
    font-size:16px;
    width:60px;
    margin-top:50px;
    padding:10px;
    display:${props => props.doneClicked ? "none" : "block"};
    user-select:none;
    &:last-child {
        margin-top:10px;
    }
    &:active, &:focus {
        outline: none;
    }
`

const RollStyled = styled.div`
    width:85%;
    height:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Roll = ({type, value, rollClick, doneClicked, doneClick}) => (
    <RollStyled>
        <div>
            {type.toUpperCase()}: {value}
        </div>
        <Button type={type} onClick={rollClick}>ROLL</Button>
        <Button type={type} doneClicked={doneClicked} onClick={()=>doneClick()}>Done</Button>
    </RollStyled>
)

Roll.propTypes = {
    value: PropTypes.number,
    type: PropTypes.string,
    rollClick: PropTypes.func.isRequired,
    doneClick: PropTypes.func.isRequired,
    doneClicked: PropTypes.bool
}

export default connect(
    state => ({
        value: state.value,
        type: state.type,
        doneClicked: state.doneClicked
    }),
    {
        rollClick: actions.roll,
        doneClick: actions.done
    }
) (Roll)
