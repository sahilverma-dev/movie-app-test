import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../api";
import { TMDBResponse } from "../interfaces";

// Assuming TMDBResponse includes 'results' (the movies) and 'page', 'total_pages' for pagination
const getData = async ({ pageParam = 1 }) => {
  try {
    const { data } = await api<TMDBResponse>(
      `/discover/movie?page=${pageParam}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
};

export const useInfiniteMovies = () =>
  useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: getData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // Ensure there's another page to load
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });
