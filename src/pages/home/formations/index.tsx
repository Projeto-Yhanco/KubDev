import Docker from '../../../assets/docker1.svg';
import Kubernete from '../../../assets/kubernete1.svg';
import Server from '../../../assets/server.svg';



export function FormationsCard(){
    return(
        <div className="w-screen">
            <div className="w-0.5 absolute h-[150px] bg-[#7216d3] ml-[48%] "></div>
            <div className="absolute w-[30px] h-[30px] rounded-full text-white border-2 border-[#7216d3] pl-2 ml-[47%] mt-[11%]">1</div>
            <div className="w-0.5 absolute h-[45px] bg-[#7216d3] ml-[48%] mt-[13%] z-1 "></div>
                 
            <h2 className='text-white text-center text-[30px] z-50 font-bold font-mono mt-[16.5%]'> Vehna aprender em grande sobre as tecnologias 
                    em alta <br/> no mercado mundial, com qualidade e profissionalismo
            </h2>

          <div className="flex flex-col w-screen h-[600px] space-y-4">
                <h3 className="text-white font-mono text-center text-[25px] font-bold mt-16">Alguns dos nosso cursos</h3>
                <div className="flex flex-row space-x-10 ml-10">
                    <div className="bg-white w-[400px] h-[400px] rounded-[20px] flex flex-col space-y-8 p-6">
                        
                        <div className='flex flex-row w-[100px] h-[100px] bg-[#2F0B5E] rounded-[12px] mt-[15%] ml-[10%] p-4 space-x-10'>

                            <img src={Docker} alt="dockerCure"  className='w-[70px] h-[70px]'/>
                            <strong className='mt-[30%] font-mono text-[23px]'>Docker</strong>
                        </div>
                        <p className='text-black text-justify'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quibusdam, adipisci accusamus voluptatem nostrum voluptates
                             mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
                             deleniti quam ducimus dicta magni.
                        </p>
                    </div>

                    <div className="bg-white w-[400px] h-[460px] rounded-[20px] flex flex-col space-y-8 p-6">
                    <div className='flex flex-row w-[100px] h-[100px] bg-[#2F0B5E] rounded-[12px] mt-[15%] ml-[10%] p-4 space-x-10'>
                            <img src={Kubernete} alt="dockerCure"  className='w-[70px] h-[70px]'/>
                            <strong className='mt-[30%] font-mono text-[23px]'>Kubernetes</strong>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quibusdam, adipisci accusamus voluptatem nostrum voluptates
                             mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
                             deleniti quam ducimus dicta magni.
                        </p>
                    </div>
                    <div className="bg-white w-[400px] h-[400px] rounded-[20px] flex flex-col space-y-8 p-6">
                    <div className='flex flex-row bg-[#2F0B5E] w-[100px] h-[100px] rounded-[12px] mt-[15%] p-2 ml-[10%] space-x-10'>
                            <img src={Server} alt="dockerCure" className='w-[100px] h-[100px]'/>
                            <strong className='mt-[30%] font-mono text-[23px]'>Cloud</strong>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quibusdam, adipisci accusamus voluptatem nostrum voluptates
                             mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
                             deleniti quam ducimus dicta magni.
                        </p>
                    </div>
                </div>
          </div>

          

        </div>
    )
}