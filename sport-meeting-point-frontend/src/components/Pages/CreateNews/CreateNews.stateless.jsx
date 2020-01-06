import React, {useState} from 'react'
import style from './style.scss'
import {Container} from '../../Layouts/Container'
import {ButtonA} from '../../Layouts/Button'
import PropTypes from 'prop-types'
import getCurrentDate from '../../../utils/getCurrentDate'

const validationLimit = {
    title: 64,
    context: 2000
}

const ValidationMsg = ({msg}) => (
    <p style={{color: 'red'}}>
        {msg}
    </p>
)

ValidationMsg.propTypes = {
    msg: PropTypes.string
}

export default function CreateNewsStateless({onHandleAllInputData, validationMessage}) {
    const [data, setData] = useState(
        {
            title: '',
            context: '',
            // date: getCurrentDate(),
            image: null
        }
    )

    // console.log(getCurrentDate())

    return (
        <Container>
            <div className={style.mainContainer}>
                <p id={style.pageTitle}>Create news</p>

                {data.title.length > validationLimit.title && <ValidationMsg msg='News title too long'/>}
                <p>1) News title: </p>
                <input
                    onChange={e => setData({...data, title: e.target.value})}
                    value={data.title}
                    className={style.inputText}
                    type='text'
                />

                {data.context.length > validationLimit.context &&
                <ValidationMsg msg='News preview message too long'/>}
                <p>3) Context: </p>
                <textarea
                    onChange={e => setData({...data, context: e.target.value})}
                    value={data.context}
                    style={{height: '90px'}}
                    className={style.inputText}
                />

                <p>6)News image: </p>
                <br/>
                <input
                    type='file'
                    onChange={e => setData({...data, image: e.target.files[0]})}
                />

                <ButtonA
                    onClick={e => onHandleAllInputData(data)}
                    style={{margin: '20px'}}
                    title='Save news'
                />

                {
                    validationMessage.map((a, i) => (
                        <p key={i} style={{color: 'red', margin: '7px'}}>
                            *{a}
                        </p>)
                    )
                }

            </div>
        </Container>
    )
}

CreateNewsStateless.propTypes = {
    onHandleAllInputData: PropTypes.func,
    validationMessage: PropTypes.array
}
