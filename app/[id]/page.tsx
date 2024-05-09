import React from "react";

const ProductDetail = ({ params }: { params: { id: string[] } }) => {
  return <div>ProductDetail {params.id}</div>;
};

export default ProductDetail;
