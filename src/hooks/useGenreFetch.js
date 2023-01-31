import { useState, useEffect } from 'react';
import API from '../utils/API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = (value) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchGenre = async (page) => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchGenres(page, value.id);
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
    setState(initialState);
    fetchGenre(1);
  }, [value]);

  //Loading more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchGenre(state.page + 1);
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
