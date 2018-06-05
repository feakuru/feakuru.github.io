import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import translate from './translation.js'

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
                            RU
                        </button>
                        <button className="button"
                            onClick={ e => this.props.setLang("en") }>
                            EN
                        </button>
                    </p>
                </li>
                <li className="nav-right">
                    <p>
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
