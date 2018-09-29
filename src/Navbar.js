import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import translate from './translation.js';
import ruFlag from './ru-flag.png';
import gbFlag from './gb-flag.png';

class Navbar extends Component {
    downloadAsDoc() {
        alert("Sorry, not implemented yet.");
    }

    downloadAsPdf() {
        alert("Sorry, not implemented yet.");
    }

    render() {
        return (
            <ul className="navbar">
                <li className="nav-left">
                    <span>
                        {
                            translate(
                                {
                                    "en": "Dmitry Orlov",
                                    "ru": "Дмитрий Орлов"
                                },
                                this.props.lang
                            )
                        }
                    </span>
                </li>
                <li className="nav-right">
                    <p>
                        <button className="button"
                            onClick={ e => this.props.setLang("ru") }>
                            <img src={ruFlag} alt="RU"
                                 style={{margin: 0, padding: 0, width: 18, height: "auto"}}/>
                        </button>
                        <button className="button"
                            onClick={ e => this.props.setLang("en") }>
                            <img src={gbFlag} alt="EN"
                                 style={{margin: 0, padding: 0, width: 18, height: "auto"}}/>
                        </button>
                        <button className="button"
                            onClick={e => this.downloadAsPdf()}>
                            <FontAwesome name='file-pdf' />
                        </button>
                        <button className="button"
                            onClick={e => this.downloadAsDoc()}>
                            <FontAwesome name='file-word' />
                        </button>
                    </p>
                </li>
            </ul>
        );
    }   
}

export default Navbar;
