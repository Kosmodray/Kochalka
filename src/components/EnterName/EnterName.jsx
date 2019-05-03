import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Actions from '../../actions/actions'
import PropTypes from 'prop-types';

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    position: absolute;
    width:500px;
    height:250px;
    background-color:rgb(66, 176, 244);
    border: 1px solid black;
    color: white;
    font-size:54px;
    visibility: ${props => props.Name ? 'hidden' : 'visible' };
    background-color: ${props => {
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
`

const Button = styled.button`
    background-color: white;
    border: 1px solid black;
    font-size:36px;
`

const Input = styled.input`
    width:250px;
    height:50px;
    font-size:54px;
`

class EnterName extends React.Component{
    state = { value:"" }
    handleChange = (e) => { this.setState({value:e.target.value}) }

    handleSubmit = (e) => {
        this.props.SetName(this.state.value.trim());
        this.setState({value:""});
        e.preventDefault();
    }

    render() {
        return(
            <Form Type={this.props.Type} Name={this.props.Name} onSubmit={this.handleSubmit}>
                <span>Enter Your Name</span>
                <Input onChange={this.handleChange} value={ this.state.value }/>
                <Button type="Submit">Enter</Button>
            </Form>
        )
    }
}

EnterName.propTypes = {
    Name: PropTypes.string,
    Type: PropTypes.string,
    SetName: PropTypes.func.isRequired
}

export default connect(
    state => ({
        Name: state.Name,
        Type: state.Type
    }),
    {
        SetName: Actions.SetName
    }
) (EnterName)