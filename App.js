import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponenetsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponenetsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
