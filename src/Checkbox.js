import React, { Component } from 'react';
import './App.css';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {checked:false};
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck () {
        this.setState({
            checked: !this.state.checked
        });
    }
    render () {
        return (            
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
        );
    }
}

export default Checkbox;