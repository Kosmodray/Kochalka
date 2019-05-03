import React from 'react'
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
`

class EnterName extends React.Component{
    state = { value:"" }
    handleChange = (e) => { this.setState({value:e.target.value}) }

    handleSubmit = (e) => {
        this.props.setName(this.state.value.trim());
        this.setState({value:""});
        e.preventDefault();
    }

    render() {
        return(
            <Form type={this.props.type} name={this.props.name} onSubmit={this.handleSubmit}>
                <span>Enter Your Name</span>
                <InputBox>
                    <Input onChange={this.handleChange} value={ this.state.value }/>
                    <Button type="Submit">Enter</Button>
                </InputBox>
            </Form>
        )
    }
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