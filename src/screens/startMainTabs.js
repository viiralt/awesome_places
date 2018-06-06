import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = async () => {
  const mapIcon = await Icon.getImageSource('md-map', 30);
  const shareIcon = await Icon.getImageSource('ios-share-alt', 30);
  const menuIcon = await Icon.getImageSource('ios-menu', 30);

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'awesome-places.FindPlaceScreen',
        label: 'Find a place',
        title: 'Find a place',
        icon: mapIcon,
        navigatorButtons: {
          leftButtons: [
            {
              icon: menuIcon,
              title: 'Menu',
              id: 'sideDrawerToggle',
            },
          ],
        },
      },
      {
        screen: 'awesome-places.SharePlaceScreen',
        label: 'Share a place',
        title: 'Share a place',
        icon: shareIcon,
        navigationButtons: {
          leftButtons: [
            {
              icon: menuIcon,
              title: 'Menu',
              id: 'sideDrawerToggle',
            },
          ],
        },
      },
    ],
    drawer: {
      left: {
        screen: 'awesome-places.SideDrawerScreen',
      },
    },
  });
};

export default startTabs;
