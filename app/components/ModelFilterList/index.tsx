"use client";
import { Card, Checkbox, Skeleton } from "antd";
import type { GetProp } from "antd";
import MyInput from "../Input/Input";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const ModelFilterList = () => {
  const [models, setModels] = useState<string[]>([]);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createPageURL = (model: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("model");
    params.set("model", model);
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
    const getModel = async () => {
      const res = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      const data = await res.json();
      const model: string[] = Array.from(
        new Set(data.map((item: { model: string }) => item.model))
      );
      setModels(model);
      setFilteredModels(model);
      setLoading(false);
    };
    getModel();
  }, []);
  const handleSearchModels = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredModels = models.filter((model) =>
      model.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredModels(filteredModels);
  };
  return (
    <Card
      title={
        <MyInput placeholder="Search Model" onChange={handleSearchModels} />
      }
      style={{ width: 250, height: 250, overflowY: "auto" }}
    >
      <Skeleton loading={loading} active>
        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column" }}
          options={filteredModels}
          onChange={onChange}
        />
      </Skeleton>
    </Card>
  );
};

export default ModelFilterList;
