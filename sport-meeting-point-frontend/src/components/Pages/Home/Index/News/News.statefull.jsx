import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsStateless from './News.stateless.jsx'
import style from './style.scss'

const hardCode = [
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, animi!',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem evenietorem, ipsum dolor sit amet consectetur adipisicing elit.Neque exercitationem eveniet necessitatibus nesciunt dignissimos commodi laborum a, quasi tenetur, quae aspernatur sunt, ut ipsam ea aut quidem.Fuga voluptatem odit sit ut.'
  }

]

export default class NewsStatefull extends Component {
  render () {
    return (
      <div id={style.mainContainer}>
        {
          hardCode.map((item, index) => <NewsStateless key={index} title={item.title} text={item.text} />)
        }
        <NewsStateless title='title1' text='text222' />

        <button id={style.btnSeeMoreNews}>See more news...</button>
      </div>
    )
  }
}
