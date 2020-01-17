import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'react-native';


type Props = {};
export default class ModalExample extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
         
          <Body>
            <Title>モーダル</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}