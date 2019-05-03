import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import actions from '../../actions/actions'
import PropTypes from 'prop-types';
import { UI_COLORS_DICT } from '../../lib/dict'

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    position: absolute;
    width:500px;
    height:250px;
    color: white;
    font-size:36px;
    visibility: ${props => props.name ? 'hidden' : 'visible' };
    background-color: ${props => UI_COLORS_DICT[props.type]};
`

const Button = styled.button`
    background-color: white;
    border: none;
    font-size:30px;
`

const Input = styled.input`
    width:200px;
    height:50px;
    font-size:36px;
    border:none;
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
                <Input onChange={this.handleChange} value={ this.state.value }/>
                <Button type="Submit">Enter</Button>
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