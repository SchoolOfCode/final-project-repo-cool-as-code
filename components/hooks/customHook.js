import { useState, useEffect } from "react";

//API
import API from "../APIconfig/API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  //console.log(searchTerm);

  const fetchMovies = async (searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const recipes = await API.fetchRecipes(searchTerm, page);

      setState((prev) => ({
        ...recipes,
        results:
          page > 1
            ? [...prev.results, ...recipes.results]
            : [...recipes.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial & search
  /*
            need to allow for multiple 
            page results from fetch
*/

  useEffect(() => {
    setState(initialState);
    fetchRecipes(searchTerm);
  }, [searchTerm]);

  //   //load More
  //   useEffect(() => {
  //     if (!isLoadingMore) return;

  //     fetchRecipes(searchTerm);
  //     setIsLoadingMore(false);
  //   }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
