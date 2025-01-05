import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, StatusBar } from "react-native";

import { Navigation } from "./navigation/StackNavigation";

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

        <Navigation />
      </View>
    </QueryClientProvider>
  );
};

export default App;
