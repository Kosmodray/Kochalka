import React from 'react'
import styled from 'styled-components'
import CT from './ChangeType/ChangeType'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Head = styled.header`
width:100vw;
height:80px;
background-color:${props => {
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
font-size: 48px;
color: white;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding-left:50px;
box-sizing:border-box;
`
const Header = ({Type}) => (
    <Head Type={Type}>
        <span>Kochalka</span>
        <CT/>
    </Head>
)

Header.propTypes = {
    Type: PropTypes.string
}

export default connect(
    state => ({
        Type: state.Type
    })
)(Header)