import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const MyInput = () => {
  return (
    <Input
      className="search-input"
      placeholder="Search"
      size="large"
      prefix={<SearchOutlined />}
      allowClear
    />
  );
};

export default MyInput;
