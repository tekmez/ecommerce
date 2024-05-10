import MyCard from "@/app/components/Card";
import MyPagination from "./components/Pagination";
import { getDataSearch } from "./loaders";
import FiltersSections from "./containers/FiltersSections";
import { Suspense } from "react";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
}
interface SearchParamsProps {
  searchParams?: {
    page?: number | string;
    query?: string;
    sortBy?: string;
    brand?: string;
    model?: string;
  };
}

export default async function Home({
  searchParams,
}: Readonly<SearchParamsProps>) {
  const query = searchParams?.query ?? "";
  const currentPage = searchParams?.page || 1;
  const sortBy = searchParams?.sortBy || "createdAt";
  const brand = searchParams?.brand || "";
  const model = searchParams?.model || "";
  const res = await getDataSearch(query, currentPage, sortBy, brand, model);
  const data = await res.json();
  return (
    <Suspense>
      <FiltersSections />
      <div className="container">
        {data?.map((product: ProductProps) => (
          <MyCard
            key={product.id}
            size="small"
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
        <MyPagination />
      </div>
    </Suspense>
  );
}
