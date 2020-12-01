import axios from 'axios';

export default async function fetchCategories(path) {
  const data = await fetchAPI(path);
  const categoriesData = {};
  data.forEach((item) => {
    if (!categoriesData[item.category]) {
      categoriesData[item.category] = Number(1);
    } else {
      categoriesData[item.category] = categoriesData[item.category] + 1;
    }
  });
  return categoriesData;
}

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  const { data } = response;
  return data;
}
