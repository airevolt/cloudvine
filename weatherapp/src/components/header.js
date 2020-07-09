import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


export class Head extends Component {
    render() {
        return (
            <div>
                  <Container text>
    <Header
      as='h1'
      content='Social-Weather Forecast'
      inverted
      style={{
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    
      </Container>

            </div>
        )
    }
}

export default Head
