import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import MoviesList from "../components/MoviesList";
import { TMDBResponse } from "../interfaces";
import { useInfiniteMovies } from "../hooks/useInfiniteMovies";

const HomeScreen = () => {
  const {
    data,
    fetchNextPage,
    refetch,
    isRefetching,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteMovies();

  const movies = data?.pages?.flatMap((page) => page.results) || [];

  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      )}
      <MoviesList movies={movies} fetchNextPage={fetchNextPage} />
      {isFetchingNextPage && <ActivityIndicator size={"large"} />}
    </View>
  );
};

export default HomeScreen;
