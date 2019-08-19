const BASE_URL = 'http://127.0.0.1:3000';

const fetchLocations = async searchParams => {
  const response = await fetch(
    `${BASE_URL}/searchYelp?location=${searchParams.location}&term=${
      searchParams.term
    }`,
  );
  const data = response.json();
  if (response.status >= 400) {
    throw new Error(response.error.message);
  }
  return data;
};

const saveSearch = async searchParams => {
  const response = await fetch(`${BASE_URL}/recentApi`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchParams),
  });

  const data = response.json();

  if (response.status >= 400) {
    throw new Error(response.error.message);
  }

  return data;
};

const fetchRecents = async () => {
  const response = await fetch(`${BASE_URL}/recentApi`);
  const data = response.json();

  if (response.status >= 400) {
    throw new Error(response.error.message);
  }
  return data;
};

export { fetchLocations, saveSearch, fetchRecents };
