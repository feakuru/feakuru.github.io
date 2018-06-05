import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Bio from './Bio.js';
import GeneralSkills from './GeneralSkills.js';
import CategorizedSkills from './CategorizedSkills.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <Bio />
                <GeneralSkills />
                <CategorizedSkills />
            </div>
        );
    } 
}

export default App;
