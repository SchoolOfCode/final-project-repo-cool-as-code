import { useContext } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

//libraries
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

//API
import API from "../APIconfig/API";

//Page Wrapper for useContext

import { pageWrapper } from "../../pages/_app"
import { css } from "@emotion/react"
import styles from "./Searchbar.module.css"
import { color, style } from "@mui/system"


const { Search } = Input;

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#1890ff",
		}}
	/>
);

function SearchInput() {
	//Use a copy of line 24 to put the results  on any other page
	let { state, setState } = useContext(pageWrapper);
	const router = useRouter();
	// console.log(state.apiData)

	const fetchRecipesSearch = async (searchTerm) => {
		try {
			//   set error & set Loading
			const response = await API.fetchRecipesSearch(searchTerm);

			setState({
				...state,
				apiData: response.payload,
				apiMessage: response.message,
			});
			console.log(state);
			if (router.pathname === "/search" || response.payload.length === 0) {
				return;
			} else {
				Router.push("/search");
			}
		} catch (error) {
			//set error
		}
		//set loading
	};

	function onClick(searchTerm) {
		fetchRecipesSearch(searchTerm);
		console.log(router.pathname);
		//check if its on search page dont push
		//if 0 results not on search page dont push
		//else push
	}


  return (
    <div className={styles.searchBox}>
    <label className={styles.searchLabel}>What do you Fancy?</label>
      <Search
        placeholder="Search"
        allowClear
        onSearch={onClick}
        style={{ width: 300 }}
      />
    </div>
  )

}

export default SearchInput;
