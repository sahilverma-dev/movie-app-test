import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageStyle,
  ImageSourcePropType,
  StyleProp,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from "@react-navigation/native";

// Types
type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

interface SharedImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  sharedId: string;
  onPress?: () => void;
  loadingColor?: string;
}

// Shared Image Component
const SharedImage: React.FC<SharedImageProps> = ({
  source,
  style,
  sharedId,
  onPress,
  loadingColor = "#999",
}) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const renderImage = () => (
    <View style={[styles.imageContainer, style]}>
      <Image
        source={{
          uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        }}
        style={[styles.image, style]}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        sharedTransitionTag={sharedId}
      />
      {loading && (
        <View style={[styles.loadingContainer, style]}>
          <ActivityIndicator color={loadingColor} />
        </View>
      )}
      {error && (
        <View style={[styles.errorContainer, style]}>
          <Text style={styles.errorText}>Failed to load image</Text>
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>{renderImage()}</TouchableOpacity>
    );
  }

  return renderImage();
};

// Home Screen
const SharedScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SharedImage
        source={{
          uri: "hhttps://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        }}
        style={styles.thumbnail}
        sharedId="item.1.photo"
        onPress={() => navigation.navigate("Detail", { id: "1" })}
      />
      <Text style={styles.title} sharedTransitionTag="item.1.title">
        Shared Element Item
      </Text>
    </View>
  );
};

// Detail Screen
const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  return (
    <View style={styles.detailContainer}>
      <SharedImage
        source={{
          uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        }}
        style={styles.detailImage}
        sharedId="item.1.photo"
      />
      <Text style={styles.detailTitle} sharedTransitionTag="item.1.title">
        Shared Element Item
      </Text>
    </View>
  );
};

// Navigation
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={SharedScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // sharedElements={(route: DetailScreenRouteProp) => {
          //   return [
          //     {
          //       id: `item.${route.params.id}.photo`,
          //       animation: "move",
          //       resize: "clip",
          //       align: "center-center",
          //     },
          //     {
          //       id: `item.${route.params.id}.title`,
          //       animation: "fade",
          //       resize: "clip",
          //       align: "left-center",
          //     },
          //   ];
          // }}
          options={{
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 400 } },
              close: { animation: "timing", config: { duration: 400 } },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  errorText: {
    color: "#666",
    fontSize: 14,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  detailImage: {
    width: "100%",
    height: 400,
  },
  detailTitle: {
    fontSize: 24,
    margin: 20,
    fontWeight: "bold",
  },
});

// Type declaration for shared transition tag
declare module "react-native" {
  interface ImageProps {
    sharedTransitionTag?: string;
  }
  interface TextProps {
    sharedTransitionTag?: string;
  }
}

export default Navigation;
