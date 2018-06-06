import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';

const PlaceList = props => (
  <FlatList
    data={props.places}
    renderItem={info => (
      <ListItem
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )}
  />
);

export default PlaceList;
