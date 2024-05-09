import * as qs from "qs";
export async function getDataSearch(
  queryString: string,
  page: string | number
) {
  //   const query = qs.stringify({
  //     filters: {
  //       $or: [
  //         { name: { $containsi: queryString } },
  //         { brand: { $containsi: queryString } },
  //       ],
  //     },
  //   });
  const url = new URL("https://5fc9346b2af77700165ae514.mockapi.io/products");
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", "12");
  url.searchParams.append("name", queryString);
  return fetch(url.href);
}
