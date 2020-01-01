import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsStateless from './News.stateless.jsx'
import style from './style.scss'
import { ButtonB } from '../../../../Layouts/Button'
import { Container } from '../../../../Layouts/Container'
import imgTest1 from '../../../../../../static/q1.jpg'

const hardCode = [
  {
    title: 'Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.',
    img: imgTest1
  }

]

export default class NewsStatefull extends Component {
  render () {
    return (
      <>
        <div id={style.mainContainer}>
          {
            hardCode.map((item, index) => (
              <NewsStateless
                key={index}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            )
            )
          }
          <NewsStateless title='title1' text='text222' />
        </div>

        <Container>
          <ButtonB title='See more news...' onClickHandle={() => alert('see more news')} />
        </Container>
      </>
    )
  }
}
