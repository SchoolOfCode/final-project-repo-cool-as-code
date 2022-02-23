import { Close, MenuOutlined } from '@material-ui/icons';
import Link from 'next/link';
import { useState } from 'react';



const Header = () => {
    
    
const [navActive , setNavActive] = useState(false);

 function openMenu(){

    setNavActive(!navActive)

 }

    
    return (
        <div className="header">

          <div className="logo">
              <span>FS</span>
          </div>
          <nav>
<ul className={navActive ? "list_items active"  :"list_items"}>

<div className="close_icon">
<Close className="close" onClick={openMenu}/>
</div>
<li className="list"><Link href="/home"><a>Home</a></Link></li>
<li  className="list"><Link href="/search"><a>Search</a></Link></li>
<li  className="list"><Link href="/createRecipe"><a>Create Recipe</a></Link></li>
<li className="list"><Link href="/createRecipe"><a>Logout</a></Link></li>

</ul>

          </nav> 
        <div className="hamburger_icon">

          <MenuOutlined className="icon" onClick={openMenu}/>  
        </div>

        </div>
    );
};

export default Header