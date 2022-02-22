import { Close, MenuOutlined } from '@material-ui/icons';
import Link from 'next/link';

import css from "./header.module.css"

const Header = () => {
    return (
        <div className={css.header}>

          <div className={css.logo}>
              <span>FS</span>
          </div>
          <nav>
<ul className={css.list_items}>

<div className={css.close_icon}>
<Close className={css.close}/>
</div>
<li className={css.list}><Link href="/home"><a>Home</a></Link></li>
<li  className={css.list}><Link href="/search"><a>Search</a></Link></li>
<li  className={css.list}><Link href="/createRecipe"><a>Create Recipe</a></Link></li>
<li className={css.list}><Link href="/createRecipe"><a>Logout</a></Link></li>

</ul>

          </nav> 
        <div className={css.hamburger_icon}>

          <MenuOutlined className={css.icon}/>  
        </div>

        </div>
    );
};

export default Header