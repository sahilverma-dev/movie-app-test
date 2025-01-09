import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { RootStack } from "./StackNavigation";
import { createStaticNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

export const RootTab = createBottomTabNavigator({
  initialRouteName: "StackNavigation",
  screens: {
    StackNavigation: RootStack,
    Search: () => <SearchScreen />,
    Profile: ProfileScreen,
  },

  screenOptions: {
    tabBarStyle: {
      height: 70,
    },

    tabBarBackground: () => (
      <BlurView
        intensity={100}
        experimentalBlurMethod="dimezisBlurView"
        style={{
          height: 70,
          width: "100%",
        }}
      />
    ),
  },
});

export const TabNavigation = createStaticNavigation(RootTab);
