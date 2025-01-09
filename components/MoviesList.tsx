import { FlatList, Text } from "react-native";
import { Movie } from "../interfaces";
import MovieCard from "./MovieCard";

interface Props {
  movies?: Movie[];
  isRefetching?: boolean;
  refetch?: () => void;
  fetchNextPage?: () => void;
}

const MoviesList: React.FC<Props> = ({
  movies,
  fetchNextPage,
  isRefetching,
  refetch,
}) => {
  if (!movies) return <Text>Data nhi hai</Text>;

  return (
    <FlatList
      data={movies}
      numColumns={2}
      renderItem={({ item: movie }) => <MovieCard movie={movie} />}
      onRefresh={refetch}
      onEndReached={() => {
        if (fetchNextPage) {
          console.log("fetchNextPage");
          fetchNextPage();
        }
      }}
    />
  );
};

export default MoviesList;
