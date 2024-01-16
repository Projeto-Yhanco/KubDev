import { CaretRight, CaretLeft } from "phosphor-react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

//Imagens importada
import StudentTI from "../../assets/teenage.png";
import Foto1 from "../../assets/foto1.png";
import Foto2 from "../../assets/foto2.png";
import Foto3 from "../../assets/foto3.png";
import Docker from "../../assets/docker.svg";
import Kubernets from "../../assets/kubernets.svg";
import Cloud from "../../assets/cloud.svg";

// Componentes
import { FormationsCard } from "./formations";

export function Home() {
  return (
    <main className="w-screen h-[1800px] flex flex-col bg-[#11072B]">
      <div className="p-1 w-screen h-screen flex flex-row bg-[#0E0725]">
        <div className="w-[600px] h-[640px] m-[20px]  flex flex-col justify-center">
          <p className="text-[#2F327D] text-[35px] mt-24 p-6 font-extrabold  ml-4 ">
            Venha ser um
            <span className="text-[#41FA7E]"> profissional qualificado </span>
            para o mercado
          </p>
          <p className=" text-white text-[15px] ml-10 w-[410px] ">
            Ensino, Mentoria e Consultoria, pensada na realidade Angolana e, ao
            mesmo tempo, no cenário dos cursos existentes no mercado mundial.
          </p>

          <div className="flex flex-row w-[100px] h-[40px] space-x-4 mt-7 ml-14">
            <button className="bg-[#7216d3] w-[40px] p-2  text-white h-[40px] rounded-full flex justify-center items-center">
              <CaretLeft size={18} weight="bold" />
            </button>
            <button className="bg-[#7216d3] text-white p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <CaretRight size={18} weight="bold" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 w-[600px] h-[158px] mt-9  pl-4">
            <div className="bg-zinc-900 w-[200px] h-[158px] absolute left-[-80px] opacity-98" style={{ backdropFilter: 'blur(150px)', background: '#0E0725' }}></div>
            <img src={Foto1} alt="foto" className="w-[170px] h-[150px]" />
            <img src={Foto2} alt="foto" className="w-[170px] h-[150px]" />
            <img src={Foto3} alt="foto" className="w-[170px] h-[150px]" />
          </div>
        </div>
        <div className="w-[600px] h-[640px] flex flex-row -mt-6 ml-[90px]">
          <img src={StudentTI} alt="studet" className="w-[500px] h-[640px]" />

          <div className="absolute flex justify-center items-center w-[170px] h-[70px] mt-[33%] p-4 space-x-6 bg-[rgb(114,22,211)] opacity-45 rounded-[10px]">
            <div>
              <img
                src={Docker}
                alt="docker"
                className="ml-1 absolute z-0 w-12"
              />
              <img
                src={Kubernets}
                alt="kubernets"
                className="absolute ml-10 z-10 w-12"
              />
              <img
                src={Cloud}
                alt="cloud computing"
                className="ml-20 z-0 w-12"
              />
            </div>
          </div>

           <div className="fixed flex flex-col w-14 gap-4 justify-center h-[300px] ml-[460px] mt-[20%] z-40 hover:cursor-pointer">
            <Instagram color="white" size={30} />
            <Facebook color="white" size={30} />
            <Linkedin color="white" size={30} />
            <Youtube color="white" size={30} />
          </div> 
        </div>
      </div>

      <FormationsCard />
    </main>
  );
}

/**
 *
 *
 *
 *
 */
