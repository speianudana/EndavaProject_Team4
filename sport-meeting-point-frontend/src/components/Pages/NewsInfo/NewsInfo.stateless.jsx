import React from 'react'
import style from './style.scss'
import { Container } from '../../Layouts/Container'
import PropTypes from 'prop-types'

import { ButtonA } from '../../Layouts/Button'

export default function NewsInfoStateless({ title, context,  authorFullName, image}) {

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
