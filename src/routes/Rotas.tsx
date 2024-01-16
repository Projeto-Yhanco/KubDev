import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./defaultlayout";
import { Home } from "../pages/home/Home";
import { Carreira } from "../pages/carreira";
import { AbouUs } from "../pages/about";
import { Formacoes } from "../pages/formacoes";


export function Rotas(){
    return(
        <Routes>
            <Route  path="/" element={ <DefaultLayout/> }>  
                <Route path="/" element={<Home/>}/>
                <Route path="/carreira" element={<Carreira/>}/>
                <Route path="/about" element={<AbouUs/>}/>
                <Route path="/formacoes" element={<Formacoes/>}/>
            </Route>       
        </Routes>
       
    )
}