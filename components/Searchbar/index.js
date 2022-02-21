import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function SearchBar() {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Search
        placeholder="What do you fancy?"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
}

export default SearchBar;
