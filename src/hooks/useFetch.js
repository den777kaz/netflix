import { NavLink } from 'react-router-dom';
import { apiKey } from '../api/api';
const { useEffect } = require('react');
const { useState } = require('react');

export function useFetch(id) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar${apiKey}&language=en-US`
    )
      .then((res) => {
        // setResponse(res.data);
        // setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [id]);
  return [response, loading, hasError];
}
