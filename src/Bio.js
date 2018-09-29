import React, { Component } from 'react';
import translate from './translation.js'
import profile_pic from './profile.jpg';

class Bio extends Component {
    render() {
        return (
            <div className="screen">
                <div className="pull-up-on-mobile fifth-of-screen">
                    <img src={profile_pic} alt={
                        translate(
                            {
                                "en": "A picture of me in London with a phone",
                                "ru": "Фото меня в Лондоне с телефоном в руке"
                            },
                            this.props.lang
                        )
                    } />
                </div>
                <div className="half-screen">
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
                <div className="fifth-of-screen">
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
                        {
                            [
                                {
                                    iconClass: "fab fa-telegram",
                                    link: "https://t-do.ru/feakuru",
                                    title: "Telegram"
                                },
                                {
                                    link: "mailto:feanarokurufinve@gmail.com",
                                    iconClass: "fa fa-envelope",
                                    title: "E-mail"
                                },
                                {
                                    link: "https://github.com/feakuru/",
                                    iconClass: "fab fa-github",
                                    title: "GitHub"
                                },
                                {
                                    link: "https://www.linkedin.com/in/dmitry-orlov-05515a11a/",
                                    iconClass: "fab fa-linkedin",
                                    title: "LinkedIn"
                                },
                                {
                                    link: "https://stackexchange.com/users/7648139/dmitry-orlov",
                                    iconClass: "fab fa-stack-overflow",
                                    title: "StackOverflow"
                                },
                                {
                                    link: "https://twitter.com/feakuru",
                                    iconClass: "fab fa-twitter-square",
                                    title: "Twitter"
                                },
                                {
                                    link: "https://stepik.org/users/48434329",
                                    iconClass: "fab fa-stripe-s",
                                    title: "Stepik"
                                }
                            ].map(
                                (elt, idx) => (
                                    <li key={"contacts-item-" + (idx + 1)}>
                                        <a target="_blank" href={elt.link}>
                                            <span aria-hidden="true" className={elt.iconClass} />
                                            &nbsp;
                                            {elt.title}
                                        </a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>

            </div>
        );
    }
}

export default Bio;
