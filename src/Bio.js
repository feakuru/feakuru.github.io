import React, { Component } from 'react';
import translate from './translation.js'
import profile_pic from './profile.jpg';

class Bio extends Component {
    render() {
        return (
            <div className="screen">
                <div>
                    Bio:
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facere sed, eos delectus autem ex? Porro blanditiis nostrum aliquid numquam autem repellat, nesciunt totam architecto, quo expedita adipisci repudiandae. Ut?
                </div>
                <div>
                    General skills:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quod dolor excepturi impedit culpa aspernatur iure deleniti expedita repellat saepe aut quae velit, laborum assumenda optio delectus, molestias porro.
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
