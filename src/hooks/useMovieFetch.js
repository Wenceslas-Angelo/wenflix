import { useState, useEffect, useCallback } from 'react';
import API from '../utils/API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [similar, setSimilar] = useState([initialState]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(
    async (page) => {
      try {
        setLoading(true);
        setError(false);
        API.fetchMovie(movieId).then((movie) => {
          API.fetchCredits(movieId).then((credits) => {
            const directors = credits.crew.filter(
              (member) => member.job === 'Director'
            );
            setState({ ...movie, actors: credits.cast, directors });
          });
        });
        let movies = await API.fetchSimilarMovie(page, movieId);
        setSimilar((prev) => ({
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        }));
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    },
    [movieId]
  );

  useEffect(() => {
    fetchData(1);
  }, [movieId]);

  return { state, loading, error, similar };
}

export default useMovieFetch;
