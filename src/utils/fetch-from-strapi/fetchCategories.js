import axios from 'axios';

export default async function fetchCategories() {
  const data = await fetchAPI();
  const categoriesData = {};
  data.forEach((item) => {
    categoriesData[item.category] = true;
  });

  return Object.keys(categoriesData);
}

export function getStrapiURL() {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }/restaurant-menus`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI() {
  const requestUrl = getStrapiURL();
  const response = await axios.get(requestUrl);
  const { data } = response;
  return data;
}
