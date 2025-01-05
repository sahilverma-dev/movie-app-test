import { FlatList, Text } from "react-native";
import { Movie } from "../interfaces";
import MovieCard from "./MovieCard";

interface Props {
  movies?: Movie[];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  if (!movies) return <Text>Data nhi hai</Text>;

  return (
    <FlatList
      data={movies}
      numColumns={2}
      renderItem={({ item: movie }) => <MovieCard movie={movie} />}
    />
  );
};

export default MoviesList;
