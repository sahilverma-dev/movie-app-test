import { View, Image, TouchableOpacity } from "react-native";

import { getPoster } from "../utils";
import { Movie } from "../interfaces";
import { useNavigation } from "@react-navigation/native";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("clicked");
        navigate("Movie", {
          movie,
        });
      }}
    >
      <Image
        source={{
          uri: getPoster(movie.poster_path).w154,
        }}
        style={{
          width: 200,
          height: 350,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
