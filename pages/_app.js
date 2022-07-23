import '../styles/globals.css'
import Header from '../components/Header/Header';
import { StateContext } from "../context/stateContext.js";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
 
  return (
    <StateContext>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp
