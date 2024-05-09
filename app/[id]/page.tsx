import Link from "next/link";
import MyCard from "../components/Card";

const getDataById = async (id: string) => {
  const res = await fetch(
    `https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`
  );
  const data = await res.json();
  return data;
};

const ProductDetail = async ({ params }: { params: { id: string[] } }) => {
  const data = await getDataById(params.id[0]);
  return (
    <div className="detail-contaimer">
      <MyCard
        key={data.id}
        size="large"
        id={data.id}
        name={data.name}
        price={data.price}
        description={data.description}
      />
      <Link href="/">Back to products</Link>
    </div>
  );
};

export default ProductDetail;
