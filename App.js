import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponenetsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponenetsScreen
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
