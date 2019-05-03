import React from 'react'
import styled from 'styled-components'
import NB from './ChangeType'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { UI_COLORS_DICT } from '../../lib/dict'

const Head = styled.header`
width:100vw;
background-color:${props => UI_COLORS_DICT[props.type]};
font-size: 32px;
color: white;
height:50px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding-left:50px;
box-sizing:border-box;
`
const Header = ({type}) => (
    <Head type={type}>
        <span>Kochalka</span>
        <NB/>
    </Head>
)

Header.propTypes = {
    type: PropTypes.string
}

export default connect(
    state => ({
        type: state.type
    })
)(Header)