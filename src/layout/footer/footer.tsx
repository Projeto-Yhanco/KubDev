import Logo from '../../assets/KubDev.svg';


export function Footer(){
    return(
        <footer className="bg-[#1D093F] w-screen h-[550px] space-y-10 flex flex-col">
            <img src={Logo} alt="logo" className='w-[176px] h-[83px] mt-[4%] ml-[44%]'/>

            <div className='flex flex-col h-[180px] space-y-7'>

                <span className='text-[20px] text-white text-center font-medium font-mono'>
                    Inscreva-se para receber nossa <br/> Newsletter
                </span>

                <div className='flex flex-row ml-[30%] h-[68px] space-x-4'>
                    <input type="email" placeholder='Digite seu email' className='w-[300px] h-[61px] rounded-[60px] p-4 border-[1px] bg-transparent'/>
                    <button type="submit" className='w-[160px] h-[61px] bg-[#545AE8] rounded-[60px] text-white font-medium p-4'>Subscrever</button>
                </div>

            </div>

            <span className='text-center text-white font-mono'>Privacy Policy | Terms & Conditions</span>

            <strong className=" w-[699px] h-[14px] text-xl text-white text-center font-bold ml-[25%]">
                © 2024 kubDev - Transformando a Educação em T.I
            </strong>
        </footer>
    )
}