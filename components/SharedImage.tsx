// SharedImage.tsx
import React from "react";
import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ImageSourcePropType,
  StyleProp,
} from "react-native";

interface SharedImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  sharedId: string;
  onPress?: () => void;
  loadingColor?: string;
}

interface SharedImageState {
  loading: boolean;
  error: boolean;
}

export const SharedImage: React.FC<SharedImageProps> = ({
  source,
  style,
  sharedId,
  onPress,
  loadingColor = "#999",
}) => {
  const [imageState, setImageState] = React.useState<SharedImageState>({
    loading: true,
    error: false,
  });

  const handleLoad = () => {
    setImageState({ loading: false, error: false });
  };

  const handleError = () => {
    setImageState({ loading: false, error: true });
  };

  const renderImage = () => (
    <View style={[styles.container, style]}>
      <Image
        source={source}
        style={[styles.image, style]}
        onLoad={handleLoad}
        onError={handleError}
        sharedTransitionTag={sharedId}
      />
      {imageState.loading && (
        <View style={[styles.loadingContainer, style]}>
          <ActivityIndicator color={loadingColor} />
        </View>
      )}
      {imageState.error && (
        <View style={[styles.errorContainer, style]}>
          <Image
            source={require("./placeholder.png")} // Add a placeholder image to your assets
            style={[styles.image, style]}
            sharedTransitionTag={sharedId}
          />
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

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "#f8f8f8",
  },
});
