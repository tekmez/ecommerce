import "@/app/styles/header.css";
import { UserOutlined } from "@ant-design/icons";
import MyDropdown from "../Dropdown";
import MyInput from "../Input/Input";

const Header: React.FC = () => {
  return (
    <header>
      <div className="left-area">
        <h1>Eteration</h1>
        <MyInput />
      </div>
      <div className="right-area">
        <span>117.000₺</span>
        <span>
          <UserOutlined />
          Kerem
        </span>
      </div>
      <MyDropdown />
    </header>
  );
};

export default Header;
