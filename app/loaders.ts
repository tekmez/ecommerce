export async function getDataSearch(
  queryString: string,
  page: string | number,
  sortBy: string,
  brand: string
) {
  const url = new URL("https://5fc9346b2af77700165ae514.mockapi.io/products");
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", "12");
  url.searchParams.append("name", queryString);
  url.searchParams.append("sortBy", sortBy);
  url.searchParams.append("brand", brand);
  return fetch(url.href);
}
