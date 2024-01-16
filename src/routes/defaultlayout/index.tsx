import { Outlet } from "react-router-dom";
import { Header } from "../../layout/header/Header";


export function DefaultLayout(){
    return(
        <div className="bg-[#0E0725]">
            <Header/>
            <Outlet/>
        </div>
    )
}