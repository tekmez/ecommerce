"use client";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PaginationProps } from "antd";

const MyPagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    const newUrl = createPageURL(page);
    router.push(newUrl);
  };

  return (
    <Pagination
      className="pagination"
      defaultPageSize={12}
      current={currentPage}
      total={74}
      showSizeChanger={false}
      onChange={onChange}
    />
  );
};

export default MyPagination;
