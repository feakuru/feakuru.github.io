import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Bio from './Bio.js';
import GeneralSkills from './GeneralSkills.js';
import CategorizedSkills from './CategorizedSkills.js';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Bio />
                <GeneralSkills />
                <CategorizedSkills />
            </div>
        );
    } 
}

export default App;
