import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <StyledView>
      <StyledImage source={props.placeImage} resizeMode="cover" />
      <StyledText>{props.placeName}</StyledText>
    </StyledView>
  </TouchableOpacity>
);

const StyledView = styled.View`
  margin-bottom: 5px;
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #9b9f9e;
`;

const StyledImage = styled.Image`
  margin-right: 8px;
  width: 40px;
  height: 40px;
`;

export default ListItem;
