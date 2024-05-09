"use client";
import { useState } from "react";
import { Pagination, PaginationProps } from "antd";

// interface MyPaginationProps {
//   current: number;
//   onChange: (page: number, pageSize: number) => void;
// }

const MyPagination = () => {
  const [current, setCurrent] = useState(1);
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={50} />;
};

export default MyPagination;
