import { useState, useEffect, useCallback } from 'react';
import API from '../utils/API';

function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      API.fetchMovie(movieId).then((movie) => {
        API.fetchCredits(movieId).then((credits) => {
          const directors = credits.crew.filter(
            (member) => member.job === 'Director',
          );
          setState({ ...movie, actors: credits.cast, directors });
        });
      });
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return { state, loading, error };
}

export default useMovieFetch;
