import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../store/actions/places';

const ButtonWrapper = styled.View``;
const Wrapper = styled.View``;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const StyledText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 28px;
`;

const ContentWrapper = styled.View`
  margin: 22px;
`;

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <ContentWrapper>
        <Wrapper>
          <StyledImage source={this.props.selectedPlace.image} />
          <StyledText>{this.props.selectedPlace.name}</StyledText>
        </Wrapper>
        <ButtonWrapper>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <Icon name="ios-trash" size={30} color="red" />
          </TouchableOpacity>
        </ButtonWrapper>
      </ContentWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDeletePlace: key => dispatch(deletePlace(key)),
});

export default connect(null, mapDispatchToProps)(PlaceDetail);
