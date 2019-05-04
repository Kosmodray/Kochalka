import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import actions from '../actions/actions'
import PropTypes from 'prop-types';
import { UI_COLORS_DICT } from '../lib/dict'

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    position: absolute;
    width:650px;
    height:200px;
    color: white;
    font-size:24px;
    visibility: ${props => props.name ? 'hidden' : 'visible' };
    background-color: ${props => UI_COLORS_DICT[props.type]};
    @media only screen and (max-width: 900px) {
        width:50%;
        height:20%;
        font-size:14px;
    }
`

const InputBox = styled.div`
    display:flex;
    flex-direction:row;
`

const Button = styled.button`
    background-color: white;
    border: none;
    font-size:30px;
    width: 60px;
    padding:10px;
    font-size:14px;
    margin-left:1px;
    @media only screen and (max-width: 900px) {
        height: 30px;
        width:50px;
        font-size:12px;
    }
`

const Input = styled.input`
    width:200px;
    height:40px;
    font-size:36px;
    border:none;
    padding: 10px 30px;
    &:focus {
        outline:none;
    }
    @media only screen and (max-width: 900px) {
        height: 20px;
        width:30px;
        font-size:14px;
        padding: 5px 15px;
    }
`

const EnterName = ({name, type, setName}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        setName(text.trim())
        setText("")
        e.preventDefault()
    }

    const handleChange = (e) => setText(e.target.value)

    return (
        <Form type={type} name={name} onSubmit={handleSubmit}>
            <span>Enter Your Name</span>
            <InputBox>
            <Input maxLength="10" onChange={handleChange} value={text}/>
                <Button type="Submit">Enter</Button>
            </InputBox>
        </Form>
    )
}

EnterName.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    setName: PropTypes.func.isRequired
}

export default connect(
    state => ({
        name: state.name,
        type: state.type
    }),
    {
        setName: actions.setName
    }
) (EnterName)