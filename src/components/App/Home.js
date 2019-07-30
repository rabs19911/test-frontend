import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Container,
  Button
} from 'semantic-ui-react'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }
  render () {
    return <Container text>
      This is home...
      <br />
      <br />
      <Button as={Link} to='/about-us'>ABOUT US</Button>
    </Container>
  }
}
