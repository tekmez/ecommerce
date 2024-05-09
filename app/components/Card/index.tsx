"use client";
import "@/app/styles/mycard.css";
import Link from "next/link";
import { Button } from "antd";
import { UseAppDispatch } from "@/lib/hooks";
import { setBasket } from "@/lib/productSlice";

interface MyCardProps {
  size: "small" | "large";
  name: string;
  price: number;
  description: string;
  id: string;
}

const MyCard = ({ size, name, price, description, id }: MyCardProps) => {
  const dispatch = UseAppDispatch();
  const handleAddCart = () => {
    dispatch(setBasket({ id, name, price, total: 1 }));
  };
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
          <Button type="primary" onClick={handleAddCart}>
            Add to Cart
          </Button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
