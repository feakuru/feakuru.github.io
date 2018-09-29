import React, { Component } from 'react';
import translate from './translation.js'
import boxy_logo from './boxy-logo.svg';
import anyconf_logo from './anyconf-logo.svg';

class Experience extends Component {
    render() {
        return (
            <div className="screen">
                <h3>
                    {
                        translate(
                            {
                                'ru': 'Мой опыт',
                                'en': 'My experience'
                            },
                            this.props.lang
                        )
                    }
                </h3>
                <div className="iconed-list">
                    {
                        [
                            {
                                'icon': <img src={boxy_logo}
                                             style={{width: 44, maxWidth: 'none',
                                                     borderRadius: 0, margin: 10}}
                                             alt="BOXY"></img>,
                                'text': <div>
                                    <h4>
                                        <a href="https://boxy.ru" target="_blank" rel="noopener noreferrer">
                                            Boxy
                                                </a>
                                    </h4>
                                    <hr />
                                    <div>
                                        {
                                            translate(
                                                {
                                                    'ru': 'Boxy - система доставки еды в специальные ' +
                                                        'автоматы-холодильники, расположенные в ' +
                                                        'офисах и бизнес-центрах Москвы. Она включает ' +
                                                        'в себя мобильные приложения под Android и iOS, ' +
                                                        'бэкенд на python (Django) и некоторое количество ' +
                                                        'дополнительных инфраструктурных элементов.',
                                                    'en': 'Boxy is a food delivery system which uses ' +
                                                        'special refrigerator lockers located in ' +
                                                        'some offices and business centers of Moscow. It includes ' +
                                                        'Android and iOS mobile apps as well as ' +
                                                        'a backend system written in python (Django) and a few ' +
                                                        'additional infrastructure elements.'
                                                },
                                                this.props.lang
                                            )
                                        }
                                    </div>
                                    <br />
                                    <div>
                                        {
                                            translate(
                                                {
                                                    'ru': 'В мои обязанности в этом проекте ' +
                                                        'входила разработка бэкенд-инфраструктуры: ' +
                                                        'в основном REST API на Django и интеграция ' + 
                                                        'этого API с Яндекс.Кассой и нашими автоматами.',
                                                    'en': 'My responsibilities on this project ' +
                                                        'included development of the backend infrastructure: ' +
                                                        'mainly, the Django-based REST API and integrating ' +
                                                        'that API with payment systems and our lockers.',
                                                },
                                                this.props.lang
                                            )
                                        }
                                        </div>
                                </div>
                            },
                            {
                                'icon': <img src={anyconf_logo}
                                    style={{
                                        width: 44, maxWidth: 'none',
                                        borderRadius: 0, margin: 10
                                    }}
                                    alt="AnyConf"></img>,
                                'text': <div>
                                    <h4>
                                        <a href="https://anyconf.io" target="_blank" rel="noopener noreferrer">
                                            AnyConf
                                        </a>
                                    </h4>
                                    <hr />
                                    <div>
                                        {
                                            translate(
                                                {
                                                    'ru': 'AnyConf - система управления ' +
                                                        'конференциями и ивентами. Она включает ' +
                                                        'в себя мобильные приложения под Android и iOS, ' +
                                                        'бэкенд на python (Django) и веб-фронтенд ' +
                                                        'для администраторов и модераторов площадок.',
                                                    'en': 'AnyConf is a system for managing conferences' +
                                                        'and other various events. It includes ' +
                                                        'Android and iOS mobile apps as well as ' +
                                                        'a backend system written in python (Django) and a ' +
                                                        'web panel for administrators and moderators.'
                                                },
                                                this.props.lang
                                            )
                                        }
                                    </div>
                                    <br />
                                    <div>
                                        {
                                            translate(
                                                {
                                                    'ru': 'В мои обязанности в этом проекте ' +
                                                        'входила доработка бэкенд-инфраструктуры ' +
                                                        'и веб-панели: управление площадками, ' +
                                                        'создание событий, управление контактами ' +
                                                        'пользователей и другой функционал.',
                                                    'en': 'My responsibilities on this project ' +
                                                        'included development of the backend infrastructure ' +
                                                        'and web panel: platform management, ' +
                                                        'event creation, user contact managment ' + 
                                                        'and other functionality.',
                                                },
                                                this.props.lang
                                            )
                                        }
                                    </div>
                                </div>
                            },
                            {
                                'icon': <i className="fas fa-globe"></i>,
                                'text': translate(
                                    {
                                        'ru': 'информация появится позже',
                                        'en': 'no info yet'
                                    },
                                    this.props.lang
                                )
                            }
                        ].map(
                            (elt, idx) => (
                                <div className="iconed-list-item" key={"iconed-list-item-" + (idx + 1)}>
                                    <div className="iconed-list-item-icon">
                                        {elt.icon}
                                    </div>
                                    <div className="iconed-list-item-text">
                                        {elt.text}
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

export default Experience;
