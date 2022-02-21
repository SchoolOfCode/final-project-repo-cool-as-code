import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";

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

	// function to receive search term
	// update the search term

	// fetch request sent to API, build URL Header to send the search

	async function fetchData(searchTerm) {
		let response = await fetch(
			`http://localhost:5000/recipes?food=${searchTerm}`
		);
		const data = await response.json();
		setLinks(data.payload);
	}

	function onClick(value) {
		setSearchTerm(value);
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
