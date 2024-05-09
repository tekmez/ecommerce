"use client";
import { Card, Checkbox } from "antd";
import type { GetProp } from "antd";
import MyInput from "../Input/Input";
const ModelFilterList = () => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = ["Apple", "Pear", "Orange"];
  return (
    <Card title={<MyInput />} style={{ width: 250, overflowY: "auto" }}>
      <Checkbox.Group
        style={{ display: "flex", flexDirection: "column" }}
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </Card>
  );
};

export default ModelFilterList;
