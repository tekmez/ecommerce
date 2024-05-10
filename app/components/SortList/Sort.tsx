"use client";
import { Card, Radio, Space } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { RadioChangeEvent } from "antd";
const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createPageURL = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("sortBy");
    params.set("sortBy", sort);
    return `${pathname}?${params}`;
  };

  const onChange = (e: RadioChangeEvent) => {
    const newUrl = createPageURL(e.target.value);
    router.push(newUrl);
  };
  return (
    <Card title="Sort By" style={{ width: 250 }}>
      <Radio.Group onChange={onChange}>
        <Space direction="vertical">
          <Radio value={"price"}>Price low to High</Radio>
          <Radio value={"createdAt"}>Old to new</Radio>
        </Space>
      </Radio.Group>
    </Card>
  );
};

export default Sort;
