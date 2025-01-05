import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import MoviesList from "../components/MoviesList";
import { TMDBResponse } from "../interfaces";

const HomeScreen = () => {
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await api<TMDBResponse>("/discover/movie");
      return data.results;
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <MoviesList movies={movies} />
    </View>
  );
};

export default HomeScreen;
