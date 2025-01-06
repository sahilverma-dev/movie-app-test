import { createStaticNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import { Movie } from "../interfaces";

// types
export type RootStackParamList = {
  Home: undefined; // No params
  Movie: { movie: Movie }; // Params required
};

// Screen props for type safety
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type MovieScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Movie"
>;

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Movie: MovieScreen,
  },
  screenOptions: { headerShown: false },
});

export const Navigation = createStaticNavigation(RootStack);
