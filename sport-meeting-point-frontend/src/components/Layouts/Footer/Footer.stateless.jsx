import React from 'react'
import style from './style.scss'
// import { Link } from 'react-router-dom'
import { Container } from '../Container'

export default function FooterStateless () {
  return (
    <footer style={{ backgroundColor: 'rgb(34, 34, 40)' }}>
      <Container>
        <div id={style.mainHead}>
          <div className={style.miniContainer}>
            <p className={style.title}>
              Lorem, ipsum dolor.
            </p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo perspiciatis vitae officiis culpa cum iusto repellat temporibus repudiandae sunt consequatur voluptatibus quod id debitis exercitationem nihil minima atque inventore repellendus, placeat optio.
          </div>
          <div className={style.miniContainer}>
            <p className={style.title}>
              Lorem, ipsum dolor.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque eligendi voluptas ut nulla ea magnam error illum libero laudantium similique rem fuga quibusdam nesciunt, repudiandae, at nisi! Minima, aliquid. Labore minus consequatur voluptas nihil porro nostrum accusantium vero veritatis fuga a.
          </div>
          <div className={style.miniContainer}>
            <p className={style.title}>
              Lorem, ipsum dolor.
            </p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fuga ipsa earum ipsam et magni porro laudantium libero quidem facilis quae cupiditate ducimus reiciendis eveniet ut architecto aliquid ullam laborum enim praesentium odit, temporibus rerum animi fugiat? Ullam, distinctio doloremque? Fugiat debitis facilis iusto!
          </div>
        </div>
      </Container>

      <div style={{ backgroundColor: 'rgb(18, 18, 28)' }}>
        <Container>
          <div id={style.mainTail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci alias repellat aspernatur iure officiis fugit quasi soluta aliquid placeat.
          </div>
        </Container>
      </div>

    </footer>
  )
}
