import React, { Component } from 'react';
import translate from './translation.js';
import ru_flag from './ru-flag.png';
import gb_flag from './gb-flag.png';
import fr_flag from './fr-flag.png';

class GeneralSkills extends Component {
    render() {
        return (
            <div className="screen">
                <h4>
                    {
                        translate(
                            {
                                'ru': 'Общие навыки',
                                'en': 'General skills'
                            },
                            this.props.lang
                        )
                    }
                </h4>
                <div className="iconed-list">
                    {
                        [
                            {
                                'icon': <i className="fas fa-user-graduate"></i>,
                                'text': translate(
                                    {
                                        'ru': <div>
                                            Я постоянно работаю и знаком на высоком уровне со следующими языками:
                                            <ul>
                                                <li>Python (особенно Django)</li>
                                                <li>C++</li>
                                                <li>JavaScript (особенно ReactJS) и NodeJS</li>
                                                <li>Clojure и ClojureScript</li>
                                            </ul>
                                            ...и технологиями:
                                            <ul>
                                                <li>ОС Linux</li>
                                                <li>Git</li>
                                                <li>СУБД SQL</li>
                                                <li>Работа с командной строкой и SSH</li>
                                            </ul>
                                        </div>,
                                        'en': <div>
                                            I constantly work and have a serious experience 
                                            with the following programming languages:
                                            <ul>
                                                <li>Python (especially Django)</li>
                                                <li>C/C++</li>
                                                <li>JavaScript (especially ReactJS) and NodeJS</li>
                                                <li>Clojure and ClojureScript</li>
                                            </ul>
                                            ...and technologies:
                                            <ul>
                                                <li>Linux-based OS</li>
                                                <li>Git</li>
                                                <li>SQL DBMS</li>
                                                <li>Bash and SSH</li>
                                            </ul>
                                        </div>
                                    },
                                    this.props.lang
                                )
                            },
                            {
                                'icon': <i className="far fa-compass"></i>,
                                'text': translate(
                                    {
                                        'ru': <div>
                                            Я периодически работаю и знаком на неплохом уровне со следующими языками:
                                            <ul>
                                                <li>Java</li>
                                                <li>Golang</li>
                                            </ul>
                                            ...и технологиями:
                                            <ul>
                                                <li>MatLab/Octave</li>
                                                <li>СУБД NoSQL</li>
                                            </ul>
                                        </div>,
                                        'en': <div>
                                            I work from time to time and have a good experience with the following programming languages:
                                            <ul>
                                                <li>Java</li>
                                                <li>Golang</li>
                                            </ul>
                                            ...and technologies:
                                            <ul>
                                                <li>MatLab/Octave</li>
                                                <li>NoSQL DBMS</li>
                                            </ul>
                                        </div>
                                    },
                                    this.props.lang
                                )
                            },
                            {
                                'icon': <i className="fas fa-globe"></i>,
                                'text': translate(
                                    {
                                        'ru': <div>
                                            Я знаю следующие языки:
                                            <table>
                                                <tr>
                                                    <td>
                                                        <img src={ru_flag} alt="RU"
                                                            style={{ width: 32, margin: 0, borderRadius: 0 }} />
                                                    </td>
                                                    <td>
                                                        <b>
                                                            Русский
                                                        </b>
                                                    </td>
                                                    <td>Мой родной язык</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={gb_flag} alt="EN"
                                                            style={{ width: 32, margin: 0, borderRadius: 0 }} />
                                                    </td>
                                                    <td>
                                                        <b>
                                                            Английский
                                                        </b>
                                                    </td>
                                                    <td>Свободно читаю и пишу, могу разговаривать без труда</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={fr_flag} alt="FR"
                                                            style={{width: 32, margin: 0, borderRadius: 0}}/>
                                                    </td>
                                                    <td>
                                                        <b>
                                                            Французский
                                                        </b>
                                                    </td>
                                                    <td>Могу читать и переводить, немного объясняться</td>
                                                </tr>
                                            </table>
                                        </div>,
                                        'en': 'I use Git in all my projects and follow Gitflow.'
                                    },
                                    this.props.lang
                                )
                            }
                        ].map(
                            (elt, idx) => (
                                <div className="iconed-list-item" key={ "iconed-list-item-" + (idx + 1) }>
                                    <div className="iconed-list-item-icon">
                                        { elt.icon }
                                    </div>
                                    <div className="iconed-list-item-text">
                                        { elt.text }
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default GeneralSkills;
