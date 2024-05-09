import "@/app/styles/mycard.css";
import MyLink from "../Link";
import Link from "next/link";

interface MyCardProps {
  size: "small" | "large";
  name: string;
  price: number;
  description: string;
  id: string;
}

const MyCard = ({ size, name, price, description, id }: MyCardProps) => {
  return (
    <div className={`card ${size}`}>
      {size === "large" ? (
        <div className="card-img"></div>
      ) : (
        <Link href={`/${id}`} className="card-img"></Link>
      )}
      <div className="card-content">
        <div className="card-info">
          <p className="product-title">{name}</p>
          <p className="product-price">{price} ₺</p>
        </div>
        <div className="card-description">
          <MyLink url={id} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
