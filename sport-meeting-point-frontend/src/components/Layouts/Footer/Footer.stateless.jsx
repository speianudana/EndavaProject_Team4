import React from 'react'
import style from './style.scss'
// import { Link } from 'react-router-dom'
import { Container } from '../Container'

export default function FooterStateless () {
  return (
    <footer style={{ backgroundColor: 'rgb(34, 34, 40)' }}>
      <Container>
        {/* <div id={style.mainHead}> */}
        {/*  <div className={style.miniContainer}> */}
        {/*    <p className={style.title}> */}
        {/*        “Today, you have 100% of your life left.” – Tom Landry          </p> */}
        {/*  </div> */}

        {/* </div> */}

        <p className={style.title} style={{ textAlign: 'center' }}>
                      “Today, you have 100% of your life left.” – Tom Landry
        </p>
      </Container>

      <div style={{ backgroundColor: 'rgb(18, 18, 28)' }}>
        <Container>
          <div id={style.mainTail}>
            No Copyright © 2019 - 2020
          </div>
        </Container>
      </div>

    </footer>
  )
}
