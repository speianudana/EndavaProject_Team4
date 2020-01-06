import React, {useState} from 'react'
import style from './style.scss'
import {Container} from '../../Layouts/Container'
import {ButtonA} from '../../Layouts/Button'
import PropTypes from 'prop-types'
import getCurrentDate from '../../../utils/getCurrentDate'

const validationLimit = {
    title: 64,
    previewMessage: 200,
    description: 1000,
    address: 128
}

const ValidationMsg = ({msg}) => (
    <p style={{color: 'red'}}>
        {msg}
    </p>
)

ValidationMsg.propTypes = {
    msg: PropTypes.string
}

export default function CreateEventStateless({handleAllInputData, validationMessage}) {
    const [data, setData] = useState(
        {
            title: '',
            address: '',
            previewMessage: '',
            description: '',
            date: getCurrentDate(),
            image: null
        }
    )

    // console.log(getCurrentDate())

    return (
        <Container>
            <div className={style.mainContainer}>
                <p id={style.pageTitle}>Create event</p>

                {data.title.length > validationLimit.title && <ValidationMsg msg='Event title too long'/>}
                <p>1) Event title: </p>
                <input
                    onChange={e => setData({...data, title: e.target.value})}
                    value={data.title}
                    className={style.inputText}
                    type='text'
                />

                {data.address.length > validationLimit.address && <ValidationMsg msg='Event address too long'/>}
                <p>2) Address: </p>
                <input
                    onChange={e => setData({...data, address: e.target.value})}
                    value={data.address}
                    className={style.inputText}
                    type='text'
                />

                {data.previewMessage.length > validationLimit.previewMessage &&
                <ValidationMsg msg='Event preview message too long'/>}
                <p>3) Preview message: </p>
                <textarea
                    onChange={e => setData({...data, previewMessage: e.target.value})}
                    value={data.previewMessage}
                    style={{height: '90px'}}
                    className={style.inputText}
                />

                {data.description.length > validationLimit.description &&
                <ValidationMsg msg='Event description too long'/>}
                <p>4) Description: </p>
                <textarea
                    onChange={e => setData({...data, description: e.target.value})}
                    value={data.description}
                    style={{height: '150px'}}
                    className={style.inputText}
                />

                <p>5) Event date: </p>
                <input
                    onChange={e => setData({...data, date: e.target.value})}
                    type='date'
                    data-date=''
                    data-date-format='DD MMMM YYYY'
                />

                <p>6)Event image: </p>
                <br/>
                <input
                    type='file'
                    onChange={e => setData({...data, image: e.target.files[0]})}
                />

                <ButtonA
                    onClick={e => handleAllInputData(data)}
                    style={{margin: '20px'}}
                    title='Save event'
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

CreateEventStateless.propTypes = {
    handleAllInputData: PropTypes.func,
    validationMessage: PropTypes.array
}
