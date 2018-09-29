import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Bio from './Bio.js';
import GeneralSkills from './GeneralSkills.js';
import Experience from './Experience.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'ru'
        };
    }

    render() {
        return (
            <div className="app">
                <Navbar lang={ this.state.lang }
                        setLang={ newLang => this.setState({lang: newLang}) }/>
                <Bio lang={ this.state.lang } />
                <GeneralSkills lang={ this.state.lang } />
                <Experience lang={ this.state.lang } />
                <div className="screen">
                    <hr/>
                </div>
            </div>
        );
    } 
}

export default App;
