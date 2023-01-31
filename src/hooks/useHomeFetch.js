import { useState, useEffect } from 'react';
import API from '../utils/API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = (searchTerm, category, genre) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchValue = '') => {
    try {
      setError(false);
      setLoading(true);
      let movies;
      if (category === 'Popular') {
        movies = await API.fetchMovies(searchValue, page);
      } else if (category === 'Upcoming') {
        movies = await API.fetchUpcoming(page);
      } else if (category === 'Top rated') {
        movies = await API.fetchTopRated(page);
      } else if (genre) {
        movies = await API.fetchGenre(page, genre.id);
      }
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
    fetchMovies(1);
  }, [category, genre]);

  // Search
  useEffect(() => {
    if (searchTerm) setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

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
