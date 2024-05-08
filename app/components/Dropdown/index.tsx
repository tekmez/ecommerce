import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Input, Space } from "antd";
import type { MenuProps } from "antd";
const items: MenuProps["items"] = [
  {
    label: "Kerem",

    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: "117.000₺",
    key: "3",
  },
];
const MyDropdown = () => {
  return (
    <div className="right-area-dropdown">
      <Dropdown menu={{ items }} arrow>
        <Space>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Space>
      </Dropdown>
    </div>
  );
};

export default MyDropdown;
