import React from 'react'
import NewsArticle from './NewsArticle.jsx'
import {
  Row,
  Col,
  Container
} from 'bootstrap-4-react';
import style from './NewsContainer.scss'

function txtLengthFormatter(txt) {
  if (!txt) return
  if (txt.length > 200) {
    return txt.substring(0, 200) + ' ...';
  }

  return txt
}

export default function NewsContainerStateless(props) {
  let counter = 0

  return (
    <div className={style.background}>
      <Container>
        {props.data.map((item, index, list) => {
          counter++
          if (index != 0 && index % 2 != 0)
            return (
              <Row key={index} mb="2">
                <Col md="6">
                  <NewsArticle title={props.data[index - 1].title} date={props.data[index - 1].date}
                    text={txtLengthFormatter(props.data[index - 1].text)} domains={props.data[0].domains} />
                </Col>
                <Col md="6">
                  <NewsArticle title={props.data[index].title} date={props.data[index].date}
                    text={txtLengthFormatter(props.data[index].text)} />
                </Col>

              </Row>
            )
          else return
        })}

        {counter > 0 && counter % 2 != 0 && <Row mb="2">
          <Col md="6">
            <NewsArticle title={props.data[counter - 1].title} date={props.data[counter - 1].date}
              text={txtLengthFormatter(props.data[counter - 1].text)} domains={props.data[0].domains} />
          </Col>
        </Row>
        }
      </Container>
    </div>
  )
}
