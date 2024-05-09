import MyCard from "@/app/components/Card";
import MyPagination from "./components/Pagination";
import { getDataSearch } from "./loaders";

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
  };
}

export default async function Home({
  searchParams,
}: Readonly<SearchParamsProps>) {
  const query = searchParams?.query ?? "";
  const currentPage = searchParams?.page || 1;
  const res = await getDataSearch(query, currentPage);
  const data = await res.json();

  return (
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
  );
}
