import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'awesome-places.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'awesome-places.SideDrawerScreen',
  () => SideDrawerScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login',
  },
});