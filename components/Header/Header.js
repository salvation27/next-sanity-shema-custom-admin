import React,{useEffect,useState} from "react";
import Link from "next/link";
import styles from '../../styles/Header.module.css'
import { client } from "../../sanityClient";

const Header = () => {

const [menu,setMenu] = useState([])
useEffect(()=>{
   const fetch = async () => {
    const query = '*[_type=="menu"]';
    const menuItems = await client.fetch(query);
    setMenu(menuItems);
   }
   fetch();
},[])

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link href="/">
          <h2>Logo</h2>
        </Link>
      </div>
      <div className={styles.header_menu}>
        <ul className="dflex">
          {menu.length > 1 &&
            menu
              .map((item, i) => (
                <li key={i}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
              .reverse()}
          {/* <li>
            <Link href="/">Main</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;


export const getServerSideProps = async () => {
  const query = '*[_type=="menu"]';
  const menu = await client.fetch(query);

  return {
    props: { menu }
  };
};
