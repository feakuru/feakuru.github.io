import React, { Component } from 'react';
import translate from './translation.js'

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
                                'icon': <i className="fab fa-python"></i>,
                                'text': translate(
                                    {
                                        'ru': 'Мой любимый язык программирования. Активно работаю с ним с 2015.',
                                        'en': 'My favourite programming language. Using it since 2015.'
                                    },
                                    this.props.lang
                                )
                            },
                            {
                                'icon': <i className="fa fa-plus-circle"></i>,
                                'text': translate(
                                    {
                                        'ru': 'С C/C++ я работаю с самого начала своего пути в программировании в 2014.',
                                        'en': 'I use C++ since I began programming in 2014.'
                                    },
                                    this.props.lang
                                )
                            },
                            {
                                'icon': <i className="fab fa-git-square"></i>,
                                'text': translate(
                                    {
                                        'ru': 'Во всех своих проектах я активно использую Git, ' +
                                            'следуя принципам Gitflow.',
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
