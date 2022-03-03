import { Close, MenuOutlined } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
	const [navActive, setNavActive] = useState(false);

	function openMenu() {
		setNavActive(!navActive);
	}

	return (
		<div className="header">
			<div className="logo">
				<Image
					className="image"
					src="/nav_logo1.png"
					alt="Foodstory Logo"
					// layout="responsive"
					width="136"
					height="52"
				/>
			</div>

			<nav>
				<ul className={navActive ? "list_items active" : "list_items"}>
					<div className="close_icon">
						<Close className="close" onClick={openMenu} />
					</div>
					<li className="list">
						<Link href="/home">
							<a>HOME</a>
						</Link>
					</li>
					<li className="list">
						<Link href="/search">
							<a>SEARCH</a>
						</Link>
					</li>
					<li className="list">
						<Link href="/createRecipe">
							<a>ADD RECIPE</a>
						</Link>
					</li>
					<li className="list">
						<Link href="/api/auth/logout">
							<a>LOGOUT</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className="hamburger_icon">
				<MenuOutlined className="icon" onClick={openMenu} />
			</div>
		</div>
	);
};

export default Header;
