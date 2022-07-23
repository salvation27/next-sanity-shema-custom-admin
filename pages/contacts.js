import React,{useEffect} from 'react'
import { useStateContext } from "../context/stateContext";
import { useRouter } from "next/router";

const contacts = () => {
      const { toastMess } = useStateContext();
      const { pathname } = useRouter();
   useEffect(() => {
     toastMess(pathname);
   }, []);
  return (
    <div>contacts</div>
  )
}

export default contacts