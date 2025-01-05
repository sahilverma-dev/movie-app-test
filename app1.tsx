import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { api } from "./api";
import { Movie, TMDBResponse } from "./interfaces";
import { getPoster } from "./utils";
import { MasonryFlashList } from "@shopify/flash-list";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth / 2 - 20; // Adjust for padding and margin

  useEffect(() => {
    const getMovies = async (page = 1) => {
      const { data } = await api<TMDBResponse>({
        url: "movie/popular",
        params: {
          page,
        },
      });

      setMovies(data.results);
    };

    getMovies();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <MasonryFlashList
        data={movies}
        numColumns={2}
        style={{
          width: "100%",
          backgroundColor: "blue",
        }}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        contentContainerStyle={{
          backgroundColor: "green",
          // flex: 1,
        }}
        estimatedItemSize={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={async () => {
              console.log(item.adult);
            }}
            style={{
              position: "relative",
              height: index === 0 ? 210 : 330,
              width: "100%",
              overflow: "hidden",
              padding: 5,
            }}
          >
            <Image
              source={{
                uri: getPoster(item.poster_path).w154,
              }}
              resizeMode="cover"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
