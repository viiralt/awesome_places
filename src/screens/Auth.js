import React, { Component } from 'react';
import styled from 'styled-components';

import StartMainTabs from '../screens/startMainTabs';

const StyledButton = styled.Button``;
const StyledText = styled.Text``;
const StyledView = styled.View``;

export default class AuthScreen extends Component {
  loginHandler = () => {
    StartMainTabs();
  };

  render() {
    return (
      <StyledView>
        <StyledText>Booom, authscreen!</StyledText>
        <StyledButton title="Login" onPress={this.loginHandler} />
      </StyledView>
    );
  }
}
