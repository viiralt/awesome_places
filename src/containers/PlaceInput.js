import React, { Component } from 'react';
import styled from 'styled-components';

const StyledView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  width: 70%;
`;

const StyledButton = styled.Button`
  width: 30%;
`;

class PlaceInput extends Component {
  state = {
    placeName: '',
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <StyledView>
        <StyledTextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <StyledButton title="Add" onPress={this.placeSubmitHandler} />
      </StyledView>
    );
  }
}

export default PlaceInput;
