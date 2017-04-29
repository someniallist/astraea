import React, { Component } from 'react'
import { Image, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div id="astraea-header">
        <Image shape="circular" id="astraea-logo" src="astraea.png" />
        <Header size="huge">
          Astraea
          <Header.Subheader>A proof-of-concept decision tree CMS.</Header.Subheader>
        </Header>
      </div>
    )
  }
}

export default App
