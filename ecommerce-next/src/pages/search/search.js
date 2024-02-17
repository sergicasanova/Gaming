import {BasicLayout} from "@/layouts"
import { useEffect } from "react";


export default function search() {

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);
  
  return (
    <>
      <BasicLayout relative isOpenSearch>
        <h2>Estamos en la busqueda</h2>
      </BasicLayout>
    </>
  )
}
