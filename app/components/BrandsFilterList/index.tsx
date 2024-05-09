"use client";
import { Card, Checkbox, Skeleton } from "antd";
import type { GetProp } from "antd";
import MyInput from "../Input/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BrandsFilterList = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createPageURL = (brand: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("brand");
    params.set("brand", brand);
    return `${pathname}?${params}`;
  };

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    const newUrl = createPageURL(checkedValues?.join("|") || "");
    router.push(newUrl);
    if (!checkedValues?.length) {
      router.push(pathname);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getBrands = async () => {
      const res = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      const data = await res.json();
      const brands: string[] = Array.from(
        new Set(data.map((item: { brand: string }) => item.brand))
      );
      setBrands(brands);
      setFilteredBrands(brands);
      setLoading(false);
    };
    getBrands();
  }, []);
  const handleSearchBrands = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredBrands = brands.filter((brand) =>
      brand.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrands(filteredBrands);
  };
  return (
    <Card
      title={
        <MyInput placeholder="Search Brand" onChange={handleSearchBrands} />
      }
      style={{ width: 250, height: 250, overflowY: "auto" }}
    >
      <Skeleton loading={loading} active>
        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column" }}
          options={filteredBrands}
          defaultValue={[]}
          onChange={onChange}
        />
      </Skeleton>
    </Card>
  );
};

export default BrandsFilterList;
