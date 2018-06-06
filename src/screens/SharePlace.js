import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PlaceInput from '../containers/PlaceInput';
import { addPlace } from '../store/actions/';

const StyledView = styled.View``;

class SharePlaceScreen extends Component {
  componentDidMount() {
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);
  };

  placeAddedHandler = placeName => this.props.onAddPlace(placeName);

  render() {
    return (
      <StyledView>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </StyledView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
