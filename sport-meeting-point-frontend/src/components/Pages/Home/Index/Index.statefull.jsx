import React, { Component } from 'react'
import { Container } from '../../../Layouts/Container'
import { Header } from './Header'
import TestRedux from './TestRedux/TestRedux.statefull.jsx'
import { SubHeader } from './SubHeader'
import { Article } from './Article'

class IndexStatefull extends Component {
  constructor(props) {
    super(props)



  }

  render() {
    return (
      <>
        <Header />
        <SubHeader />
        <Container>

          <br />
          <br />
          <br />
          <br />
          <br />

          <Article
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos cum suscipit tenetur illum repellat ratione, eligendi assumenda, itaque nemo sunt aliquid repellendus consequatur dolore recusandae ipsa nisi laudantium! Non, ratione. Nesciunt iusto temporibus, explicabo numquam vero suscipit magnam minima nam perferendis exercitationem molestiae molestias voluptatem nihil facere. Doloremque animi nemo ipsam suscipit consequuntur deserunt illum sit sint quod beatae inventore officiis cumque odit similique maiores quidem dicta placeat, rerum veniam blanditiis! Maxime, enim? Consequatur accusamus deserunt ut alias, ratione qui distinctio et repudiandae ex cum expedita voluptates pariatur, dignissimos voluptatum, necessitatibus deleniti? Libero explicabo recusandae culpa fuga veritatis fugit necessitatibus soluta distinctio similique non? Eligendi dolorum unde et dolore suscipit, omnis sunt pariatur est repellat eaque, iure assumenda veritatis doloribus officia libero molestias nostrum ex esse facere magnam ab velit! Dolor, modi. Accusantium sed earum delectus minima quisquam impedit et voluptas dolore laborum doloremque repudiandae ex aperiam vitae cumque, modi assumenda eaque blanditiis recusandae culpa corrupti obcaecati alias. Ut rerum earum, repellat distinctio dolorum officiis corrupti quibusdam omnis odio rem esse? Perferendis dolor voluptas nam magni perspiciatis eos consequuntur iure, quibusdam quidem rem sequi ducimus voluptatibus magnam facilis dolore asperiores distinctio impedit molestias et assumenda doloribus maiores eligendi sunt?'}
            title={'Title title'}
          />



        </Container>





      </>
    )
  }
}

export default IndexStatefull