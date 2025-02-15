import axios from 'axios';

export default async function fetchMenu(path) {
  const data = await fetchAPI(path);
  return data;
}

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  const { data } = response;
  return data;
}
