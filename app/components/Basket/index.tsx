"use client";
import "@/app/styles/basket.css";
import { UseAppDispatch, UseAppSelector } from "@/lib/hooks";
import { decreaseTotal, increaseTotal } from "@/lib/productSlice";
import { Button, List } from "antd";
const Basket = () => {
  const dispatch = UseAppDispatch();
  const basket = UseAppSelector((state) => state.products.basket);
  const handleIecreaseTotal = (id: string) => {
    dispatch(increaseTotal(id));
  };
  const handleDecreaseTotal = (id: string) => {
    dispatch(decreaseTotal(id));
  };
  return (
    <List
      header={
        <div className="basket-header">
          Total price:{" "}
          {basket.reduce((acc, item) => acc + item.price * item.total, 0)} ₺
        </div>
      }
      size="default"
      style={{ width: "350px", height: "300px", overflow: "auto" }}
      bordered
      itemLayout="vertical"
      dataSource={basket}
      renderItem={(item) => (
        <List.Item>
          <span className="item-info">
            <p className="item-name">{item.name}</p>
            <p className="item-price">{item.price} ₺</p>
          </span>
          <span className="item-counter">
            <Button onClick={() => handleDecreaseTotal(item.id)}>-</Button>
            <p className="item-total">{item.total}</p>
            <Button onClick={() => handleIecreaseTotal(item.id)}>+</Button>
          </span>
        </List.Item>
      )}
    />
  );
};

export default Basket;
