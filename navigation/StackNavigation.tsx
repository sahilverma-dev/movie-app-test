import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Movie: MovieScreen,
  },
  screenOptions: { headerShown: false },
});

export const Navigation = createStaticNavigation(RootStack);
