import { useState, useEffect } from 'react';
import API from '../utils/API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchValue = '') => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchValue, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  //Loading more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  return {
    state,
    error,
    loading,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
