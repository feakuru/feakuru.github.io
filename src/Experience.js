import React, { Component } from 'react';
import translate from './translation.js'
import boxy_logo from './boxy-logo.svg';
import anyconf_logo from './anyconf-logo.svg';
import bankon_logo from './bankon-logo.png';


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
                                             style={{width: 88, maxWidth: 'none',
                                                     borderRadius: 0, padding: 20}}
                                             alt="BOXY"></img>,
                                'text': <div>
                                    <h4>
                                        <a href="https://boxy.ru" target="_blank" rel="noopener noreferrer">
                                            Boxy
                                        </a> (2016-2018)
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
                                        width: 88, maxWidth: 'none',
                                        borderRadius: 0, padding: 20
                                    }}
                                    alt="AnyConf"></img>,
                                'text': <div>
                                    <h4>
                                        <a href="https://anyconf.io" target="_blank" rel="noopener noreferrer">
                                            AnyConf
                                        </a> (2018)
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
                                'icon': <img src={bankon_logo}
                                    style={{
                                        width: 88, maxWidth: 'none',
                                        borderRadius: 0, padding: 20
                                    }}
                                    alt="BankOn24"></img>,
                                'text': <div>
                                    <h4>
                                        <a href="https://bankon24.ru" target="_blank" rel="noopener noreferrer">
                                            BankOn24
                                        </a> (2016)
                                    </h4>
                                    <hr />
                                    <div>
                                        {
                                            translate(
                                                {
                                                    'ru': 'BankOn24 - система для облегчения юридическим ' +
                                                        'лицам процесса работы с финансовым рынком. Она включает ' +
                                                        'в себя веб-интерфейс и бекенд на PHP. ' +
                                                        'В мои обязанности входила разработка части ' +
                                                        'последнего: написание подсистемы расчета ' +
                                                        'кредитов для юридических лиц.',
                                                    'en': 'BankOn24 is a system for facilitating the interaction ' +
                                                        'with the Russian financial market for legal entities. ' +
                                                        'It includes a web interface and a backend written in PHP. ' +
                                                        'My responsibilities included development of a part of the ' +
                                                        'latter: writing a subsystem for calculating loan stats ' +
                                                        'for legal entities'
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
                            }
                        ].map(
                            (elt, idx) => (
                                <div className="iconed-list-item" key={"iconed-list-item-" + (idx + 1)}>
                                    <div className="iconed-list-item-icon-wide">
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
                <div style={{width: '100%'}}>
                    <p style={{ textIndent: '1.5em', paddingTop: '30px', textAlign: 'justify'}}>
                        {
                            translate(
                                {
                                    'ru': 'За мою карьеру разработчика я успел также поработать над множеством мелких ' +
                                        'проектов, о которых я с радостью расскажу на собеседовании, если сочту их ' +
                                        'релевантными. Среди них были боты для Telegram и ВКонтакте, браузерные игры, ' +
                                        'проекты по парсингу и анализу больших данных с государственных ресурсов ' +
                                        'и много чему ещё.',
                                    'en': 'In my developer career I also created and worked on a lot of different ' +
                                        'projects wich I will be happy to describe during an interview, if I consider ' +
                                        'them relevant. Among them were bots for Telegram and VKontakte, browser games, ' +
                                        'parsers and analyzers of big data from state resources ' +
                                        'and many other things.'
                                },
                                this.props.lang
                            )
                        }
                    </p>
                    <hr/>
                    <p style={{ textAlign: 'center' }}>
                        <h3>
                            <a href="#contacts">
                                {
                                    translate(
                                        {
                                            'en': 'Contact me',
                                            'ru': 'Напишите мне'
                                        },
                                        this.props.lang
                                    )
                                }
                                &nbsp;
                                <span role="img" aria-label=";)">
                                    😉
                                </span>
                            </a>
                        </h3>
                    </p>
                </div>
            </div>
        );
    }
}

export default Experience;
