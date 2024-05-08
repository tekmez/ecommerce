import "@/app/styles/mycard.css";
import { Button } from "antd";
const MyCard = ({ size = "large" }: { size: "small" | "large" }) => {
  return (
    <div className={`card ${size}`}>
      <div className="card-img">Card Img</div>
      <div className="card-content">
        <div className="card-info">
          <p className="product-title">iPhone 11 Pro Max</p>
          <p className="product-price">10.000₺</p>
        </div>
        <div className="card-description">
          <Button type="primary">Add to Cart</Button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            augue magna, laoreet ac consectetur et, luctus sit amet erat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla facilisi. Suspendisse egestas maximus
            eleifend. Donec lectus ex, commodo id tristique eu, convallis nec
            est. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean in consectetur dolor. In
            porttitor risus vel nisl fringilla egestas. Praesent id enim dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
