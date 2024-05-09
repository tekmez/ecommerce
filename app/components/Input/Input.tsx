import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { InputProps } from "antd/lib/input";
const MyInput = ({ ...rest }: InputProps) => {
  return (
    <Input
      className="search-input"
      placeholder="Search"
      size="large"
      prefix={<SearchOutlined />}
      allowClear
      {...rest}
    />
  );
};

export default MyInput;
