import { NavLink } from "react-router-dom";
import KubDev from '../../assets/KubDev.svg';

export function Header(){
    return(
        <header className="w-screen h-[80px] bg-[#0E0725] flex flex-row p-2">
            <img src={KubDev} alt="logotipo" className="ml-[38px] mt-[20px] w-[120px] h-[51px]"/>
            
            <nav className="w-[600px] h-[32px] flex flex-row mt-[25px] ml-[300px] space-x-10 list-none">
            <NavLink to="/" title='Início'className="ml-[80px] text-white text-[22px] hover:text-[#41FA7E]">
                <li>Home</li>
            </NavLink>
            <NavLink to="/carreira" title='Carreira' className="ml-[120px]  text-white text-[22px] hover:text-[#41FA7E]">
                <li>Carreira</li>
            </NavLink>
            <NavLink to="/formacoes" title='Contactos' className="ml-[120px] text-white text-[22px] hover:text-[#41FA7E]">
                <li>Formações</li>
            </NavLink>
            <NavLink to="/about" title='formações' className="ml-[120px] text-white text-[22px] hover:text-[#41FA7E]">
                <li>Sobre</li>
            </NavLink>
            </nav>
        </header>
    )
}