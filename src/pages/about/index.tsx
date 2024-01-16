import Slide from '../../assets/Rectangle 844.png';
import {CheckCircle} from 'phosphor-react';
import GrelhaBranca from '../../assets/grelhaBranca.svg';
import Aula from '../../assets/Aula.svg';
import GrelhaAzul from '../../assets/grelhaAzul.svg';
import Trabalho from '../../assets/trabalho.svg';
import  Escritorio from '../../assets/escritorio.webp';
import Participando from '../../assets/participando.jpeg';
import VendoAula from '../../assets/vendo.jpg';

import { Footer } from '../../layout/footer/footer';




export function AbouUs(){
    return(
        <main className="bg-[#0E0725] h-[370vh] w-screen">
            <div className='w-[25px] h-[25px] bg-[#41FA7E] rounded-full absolute ml-[87%] mt-3'></div>
            <h1 className="text-[42px] font-bold font-mono text-white text-center mt-[8%]">Transformando a <br/>Educação em T.I</h1>
                
                <div className='w-[23px] h-[23px] bg-[#7216D3] rounded-full absolute ml-[7%] mt-[2%]'></div>
                <div className='w-[23px] h-[23px] rounded-full absolute bg-[#FF948E] ml-[20%] mt-[42%]'></div>
                <div className='w-[23px] h-[23px] bg-[#377DFF] rounded-full absolute ml-[85%] mt-[27%]'></div>
            
                <div className='w-[950px] h-[299px] ml-[15%]'>
                    <p className="text-[20px] text-[#E2E2E2] text-justify  mt-[3%]">
                        A Kubdev é uma Edtech composta por 3 pilares essenciais: Ensino, Mentoria e
                         Consultoria em DevOps, Cloud Computing e diversas áreas ligadas às
                        Tecnologias de Informação e Comunicação.
                      <br/>
                        Uma plataforma projetada e pensada na realidade Angolana e, ao mesmo
                        tempo, com o objetivo de mudar o cenário dos cursos existentes no
                        mercado mundial, que prometem fazer milagres, coisa que não existem.
                       <br/>
                        Como visão de futuro, a KubDev pretende liderar a transformação da
                        educação em DevOps e Cloud além de ser referência em mentoria de
                        carreiras de T.I e uma ponte entre Angolanos para várias empresas na
                        Europa e América. Vê um mundo onde Angolanos tornam-se recursos
                        valiosos no exterior através do acesso à educação de alta qualidade e
                        personalizado, que atenda às necessidades de cada aluno,
                        independentemente de sua localização ou recursos.
                    </p>
                </div>
                

                <div className="w-[850px] h-[500px] ml-[20%] mt-[4%] items-center">
                        <img src={Slide} alt="slides" className=' w-[700px] ml-[8%] pt-[3%]'/>
                </div>

                <div className='flex flex-row w-screen h-[735px] mt-[10%] space-x-24'>
                    <div className='w-[500px] flex flex-col space-y-4'>
                           <h2 className='text-[#3CF74F] text-[34px] font-bold text-center font-mono'>
                                Como serão as <br/> nossas aulas?
                            </h2>
                            <div className='flex flex-row space-x-1'>
                                 <span className='text-white text-[20px] font-medium ml-[25%]'>Online</span>
                                 <CheckCircle size={28} className='text-[#3CF74F] font-medium'/>
                            </div>
                           
                           <div className='flex flex-row space-x-1'>    
                                    <span className='text-white text-[20px] font-medium ml-[25%]'>Disponíveis no canal </span>
                                    <CheckCircle size={28}  className='text-[#3CF74F] font-medium'/>
                           </div>
                            
                            <div className='flex flex-row space-x-1'>
                                 <span className='text-white text-[20px] font-medium ml-[25%]'>Gratuitas</span>
                                <CheckCircle size={28}  className='text-[#3CF74F] font-medium'/>
                            </div>
                            <div className='flex flex-row space-x-1'>
                                 <span className='text-white text-[20px] font-medium ml-[25%]'>100% ligadas ao mercado</span>
                                 <CheckCircle size={28}  className='text-[#3CF74F] font-medium'/>
                            </div>

                           
                            <button className='text-[#0E0725] font-medium w-[180px]
                                 h-[50px] bg-white rounded-[24px] shadow-2xl hover:cursor-pointer ml-[30%] mt[5%]'>
                                    Subscrever-se
                            </button>
                            
                    </div>
                    <div className='w-[600px] flex flex-col'>
                        <div className='w-[600px] flex flex-row'>
                        <img src={Trabalho} alt="Trabalhando"  className='w-[250px] h-[250px] mt-[1%] ml-[2%] z-40 absolute'/>
                        <img src={Aula} alt="Aulas"  className='w-[250px] h-[250px] z-10 ml-[43%] -mt-11'/>
                        <img src={GrelhaBranca} alt="back" className='w-[100px] h-[120px] z-10 absolute -mt-5'/>
                        <img src={GrelhaAzul} alt="back" className='w-[150px] h-[80px] absolute  z-20 mt-[13%] ml-[21%]'/>
                        </div>

                            <div className='w-[600px] h-[350px] mt-[20%] flex flex-row'>
                                <img src={Escritorio} alt="Assistindo aula"  className='w-[150px] h-[130px] z-40 absolute mt-[14%] rounded-[8px]'/>
                                <img src={Participando} alt="Assistindo aula" className='w-[450px] h-[300px]  z-20 ml-[13%] rounded-[8px]'/>
                                <img src={VendoAula} alt="Assistindo aula" className='w-[189px] h-[150px] z-30 ml-[30%] absolute rounded-[8px]'/>
                            </div>
                    </div>
                </div>
                
                <Footer/>

        </main>
    )
}