import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlaceList from '../containers/PlaceList';

const StyledView = styled.View``;

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => place.key === key);

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace,
      },
    });
  };

  render() {
    return (
      <StyledView>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </StyledView>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
