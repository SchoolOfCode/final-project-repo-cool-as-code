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
      <nav className="navbar">
        <div className="logo">
          <Image
            className="image"
            src="/logo_white.png"
            alt="Foodstory Logo"
            // layout="responsive"
            width="136"
            height="52"
          />
        </div>
        <div>
          <div className="navbar_links">
            <ul className={navActive ? "list_items active" : "list_items"}>
              <div className="close_icon">
                <Close className="close" onClick={openMenu} />
              </div>
              <li className="list">
                <Link href="/home">
                  <a>home</a>
                </Link>
              </li>
             
              <li className="list">
                <Link href="/createRecipe">
                  <a>add recipe</a>
                </Link>
              </li>
              <li className="list">
                <Link href="/ourstory">
                  <a>our story</a>
                </Link>
              </li>
              <li className="list">
                <Link href="/api/auth/logout">
                  <a>logout</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hamburger_icon">
            <MenuOutlined className="icon" onClick={openMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
