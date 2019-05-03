import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import actions from '../../../actions/actions'
import {connect} from 'react-redux'
import { UI_COLORS_DICT } from '../../../lib/dict'

const Button = styled.button`
    border: 1px solid ${props => UI_COLORS_DICT[props.type]};
    font-size:16px;
    margin:50px;
    background-color:white;
    width: 60px;
    padding:10px;
`

const ClearButton = ({type, clearClick}) => (
    <Button type={type} onClick={() => clearClick()}>Clear</Button>
)

ClearButton.propTypes = {
    type: PropTypes.string,
    clearClick: PropTypes.func.isRequired
}

export default connect(
    state => ({
        type: state.type
    }),
    {
        clearClick: actions.clear
    }
)(ClearButton)