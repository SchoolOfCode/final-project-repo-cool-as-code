import { useState } from "react";

//libraries
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

//Config
import { SEARCH_BASE_URL } from "../APIconfig/config";

//API
import API from "../APIconfig/API";

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
  const [searchTerm, setSearchTerm] = useState("");

  //for local host
  async function fetchData(searchTerm) {
    let response = await fetch(
      `http://localhost:5000/recipes/search?query=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);

    //for Heroku
    const fetchRecipes = async (searchTerm) => {
      try {
        //   set error & set Loading
        const recipes = await API.fetchRecipe(searchTerm);
      } catch (error) {
        //set error
      }
      //set loading
    };
  }

  function onClick(searchTerm) {
    fetchData(searchTerm);
  }

  return (
    <div>
      <Search
        placeholder="What do you fancy?"
        allowClear
        onSearch={onClick}
        style={{ width: 200 }}
      />
    </div>
  );
}

export default SearchBar;
