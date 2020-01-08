import React from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import PropTypes from 'prop-types'

import { ButtonA as Btn } from '../../Layouts/Button'

function NewsInfoStateless({ id, title, context, authorFullName, image,
    onSubscribeClick, onUnsubscribeClick,
    getUserAlreadyIsSubscribedToThisNews }) {

    return (
        <Container>

            <div id={style.mainContainer}>
                <h1>{title}</h1>

                <br />
                <br />

                <p> Author: {authorFullName}</p>
                <br />

                <p>{context}</p>
                <br />
                <br />

                <div>
                    <img src={image} className={`${style.imgProp} ${style.leftimg}`} alt='' />
                    <br />
                </div>

                <div id={style.rectForButtonParticipate}>

                    {!getUserAlreadyIsSubscribedToThisNews && <Btn
                        title='Subscribe'
                        onClick={() => onSubscribeClick(id)}
                    />}

                    {getUserAlreadyIsSubscribedToThisNews && <Btn
                        title='Unsubscribe'
                        onClick={() => onUnsubscribeClick(id)}
                    />}

                </div>


            </div>

        </Container>

    )
}

NewsInfoStateless.propTypes = {
    title: PropTypes.string,
    context: PropTypes.string,
    authorFullName: PropTypes.string,
    image: PropTypes.string,
};

NewsInfoStateless.defaultProps = {

};


export default NewsInfoStateless