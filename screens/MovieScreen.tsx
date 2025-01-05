import { View, Text, Image, Button } from "react-native";
import { Movie } from "../interfaces";
import { getPoster } from "../utils";
import { useNavigation } from "@react-navigation/native";

const MovieScreen = (props: any) => {
  const movie: Movie = props?.route?.params?.movie;
  const { goBack } = useNavigation();

  return (
    <View>
      <Image
        source={{
          uri: getPoster(movie?.poster_path).w342,
        }}
        style={{
          width: "100%",
          height: 600,
        }}
      />
      <Text>{movie.title}</Text>

      <Button
        title="back"
        onPress={() => {
          goBack();
        }}
      />
    </View>
  );
};

export default MovieScreen;
