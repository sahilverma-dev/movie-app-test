import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, StatusBar } from "react-native";
import { TabNavigation } from "./navigation/TabNavigation";

// import { Navigation } from "./navigation/StackNavigation";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar />

        {/* <Navigation /> */}
        <TabNavigation />
      </View>
    </QueryClientProvider>
  );
};

export default App;

// import * as React from "react";
// import { View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import {
//   createStaticNavigation,
//   useNavigation,
// } from "@react-navigation/native";
// import { Button } from "@react-navigation/elements";

// function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {/* @ts-ignore */}
//       <Button onPress={() => navigation.navigate("Notifications")}>
//         Go to notifications
//       </Button>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button onPress={() => navigation.goBack()}>Go back home</Button>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator({
//   screens: {
//     Home: HomeScreen,
//     Notifications: NotificationsScreen,
//   },
// });

// const Navigation = createStaticNavigation(Drawer);

// export default function App() {
//   return <Navigation />;
// }
