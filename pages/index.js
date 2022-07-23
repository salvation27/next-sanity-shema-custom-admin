import Head from 'next/head'
import { useEffect ,useState} from 'react';
import { client } from '../sanityClient';
import { useRouter } from 'next/router';
import { useStateContext } from "../context/stateContext";
import HeroVideo from '../components/HeroVideo/HeroVideo';


export default function Home({ products}) {
  const { toastMess } = useStateContext();
  const { pathname } = useRouter();
  const [productsItem] = useState(products[0]);
  useEffect(()=>{
    toastMess(pathname);
  },[])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroVideo products={productsItem} />
      <h2>Home</h2>
    </div>
  );
}


export const getServerSideProps = async () => {
  const query = '*[_type=="mainPage"]';
  const products = await client.fetch(query);


  // const footerQuery = '*[_type=="footer"]';
  // const footerData = await client.fetch(footerQuery);

  // const menuQuery = '*[_type=="menu"]';
  // const manuItems = await client.fetch(menuQuery);

  return {
    props: { products }
  };
};