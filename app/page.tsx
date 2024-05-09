import MyCard from "@/app/components/Card";
import MyPagination from "./components/Pagination";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
}

const getData = async () => {
  const res = await fetch(
    "https://5fc9346b2af77700165ae514.mockapi.io/products"
  );
  const data = await res.json();
  return Array.from({ length: 12 }, (_, i) => ({
    id: data[i].id,
    name: data[i].name,
    price: data[i].price,
    description: data[i].description,
  }));
};

export default async function Home() {
  const data = await getData();
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
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
