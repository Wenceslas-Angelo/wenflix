import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  UPCOMING_BASE_URL,
  TOP_RATED_BASE_URL,
  GENRE_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const data = await fetch(creditsEndpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchUpcoming: async (searchTerm, page) => {
    const endpoint = `${UPCOMING_BASE_URL}&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchTopRated: async (page) => {
    const endpoint = `${TOP_RATED_BASE_URL}&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchGenre: async (page, genreId) => {
    const endpoint = `${GENRE_BASE_URL}${genreId}&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchGenres: async (searchTerm, page, genre) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${GENRE_BASE_URL}${genre}&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  fetchSimilarMovie: async (page, movieId) => {
    const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=${page}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
    return 0;
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
