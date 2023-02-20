import React, { Component } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from "./AgeStats";

import partyPopper from '../assets/party-popper.jpg';

import './App.css';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            newDate: '',
            birthday: '1998-01-17',
            showState: false
        }
    }
    
    changeBirthday() {
        console.log(this.state);
        this.setState({ birthday: this.state.newDate, showState: true });
    }
    
    render() {
        return (
            <div  className="App">
                <Form inline='true'>
                    <h2>Input Your Birthday!</h2>
                    <FormControl type="date" onChange={e => {
                        this.setState({ newDate: e.target.value });
                    }}>
                    </FormControl>
                    {' '}
                    <Button onClick={()=> this.changeBirthday()}>
                        Submit
                    </Button>
                </Form>
                {this.state.showState && <AgeStats date={this.state.birthday} />}
                {this.state.showState &&
                    <img src={partyPopper} alt='party-popper' className="party-popper" />}
            </div>
        );
    };
};

export default App;
