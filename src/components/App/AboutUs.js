import React, { Component } from 'react'
import {
  Container
} from 'semantic-ui-react'

export default class AboutUs extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }
  render () {
    return <Container text>
      This is about us
    </Container>
  }
}
