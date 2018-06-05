import React, { Component } from 'react';
import translate from './translation.js'
import profile_pic from './profile.jpg';

class Bio extends Component {
    render() {
        return (
            <div className="screen">
                <div>
                    <h4>
                        {
                            translate(
                                { "en": "Bio", "ru": "Обо мне" },
                                this.props.lang
                            )
                        }
                    </h4>
                    <p>
                        {
                            translate(
                                {
                                    "en": "I was born and live in Moscow. Since early age, I loved computer games, " +
                                        "which quickly led me to programming. In 2014, I entered Bauman Moscow State University's " +
                                        "IU-3 department (\"Information systems and telecommunications\"), where I am studying now. " +
                                        "My scientific interests are: Web, ML and AI, microcontroller programming.",
                                    "ru": "Я родился и живу в Москве. С детства увлекался компьютерными играми, " +
                                        "и это увлечение быстро переросло в интерес к программированию. В 2014 году " +
                                        "я поступил в МГТУ им. Н. Э. Баумана на кафедру ИУ-3 \"Информационные системы и телекоммуникации\", " +
                                        "где учусь до сих пор. Мои научные интересы: Web, машинное обучение и искуственный интеллект, " +
                                        "программирование микроконтроллеров."
                                },
                                this.props.lang
                            )
                        }
                    </p>
                    <p>
                        {
                            translate(
                                {
                                    "en": "In terms of software development I prefer to define myself as an open source advocate. " +
                                        "Particularly, I prefer Linux flavours (mainly Ubuntu) over any other OS for my professional " +
                                        "and personal needs. My favourite programming languages are Python 3 and C++, although I have " +
                                        "experience with many others. My professional experience is almost completely in the field " +
                                        "of web development.",
                                    "ru": "В вопросах разработки я определяю себя как сторонник открытого ПО, в частности, " +
                                        "отдавая предпочтение различным дистрибутивам Linux (в основном Ubuntu) для работы. " +
                                        "Мои основные языки программирования - Python 3 и C++, хотя у меня есть опыт и с другими языками. " +
                                        "Мой профессиональный опыт практически целиком так или иначе связан с Web-разработкой."
                                },
                        this.props.lang
                    )
                }
                    </p>
                </div>
                <div>
                    <h4>
                        {
                            translate(
                                {
                                    "en": "Contacts",
                                    "ru": "Контакты"
                                },
                                this.props.lang
                            )
                        }
                    </h4>
                    <ul className="contacts">
                        <li>
                            <a href="https://t.me/feakuru">Telegram</a>
                        </li>
                        <li>
                            <a href="mailto:feanarokurufinve@gmail.com">E-mail</a>
                        </li>
                        <li>
                            <a href="https://stackexchange.com/users/7648139/dmitry-orlov">StackOverflow</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/feakuru">Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dmitry-orlov-05515a11a/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={ profile_pic } alt={
                        translate(
                            {
                                "en": "A picture of me in London with a phone.",
                                "ru": "Фото меня в Лондоне с телефоном в руке."
                            },
                            this.props.lang
                        )
                    }/>
                </div>
            </div>
        );
    }
}

export default Bio;
