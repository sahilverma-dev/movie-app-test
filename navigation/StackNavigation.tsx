import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Movie } from "../interfaces";

// screens
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";

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

export const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Movie: MovieScreen,
  },
  screenOptions: { headerShown: false },
});
