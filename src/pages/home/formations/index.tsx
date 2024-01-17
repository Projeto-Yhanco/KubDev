import { dataCardCurso, dataProps } from "./data";

export function FormationsCard() {
  return (
    <div className="w-screen">
      <div className="w-0.5 absolute h-[150px] bg-[#7216d3] ml-[48%] "></div>
      <div className="absolute w-[30px] h-[30px] rounded-full text-white border-2 border-[#7216d3] pl-2 ml-[47%] mt-[11%]">
        1
      </div>
      <div className="w-0.5 absolute h-[45px] bg-[#7216d3] ml-[48%] mt-[13%] z-1 "></div>

      <h2 className="text-white text-center text-[30px] z-50 font-bold font-mono mt-[16.5%]">
        {" "}
        Vehna aprender em grande sobre as tecnologias em alta <br /> no mercado
        mundial, com qualidade e profissionalismo
      </h2>

      <div className="flex flex-col w-screen h-[600px] space-y-4">
        <h3 className="text-white font-mono text-center text-[25px] font-bold mt-16 mb-[50px]">
          Alguns dos nosso cursos
        </h3>
        <div className="flex justify-center  gap-7 ">
          {dataCardCurso.map((item: dataProps) => (
            <>
              <div
                key={item.id}
                className={`bg-white ${
                  item.status === true ? "h-[430px]" : "h-[340px]"
                } w-[350px] h-[340px] rounded-[10px] flex flex-col space-y-8 p-6`}
              >
                <div className="flex justify-between items-center  w-[250px]">
                  <div className="flex flex-row w-[70px] h-[70px] bg-[#2F0B5E] rounded-[12px] mt-[10px]  justify-center items-center">
                    <img
                      src={item.img}
                      alt="dockerCure"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <strong className="mt-[10px] font-mono text-[23px] mr-[40px]">
                    {item.title}
                  </strong>
                </div>
                <p className="text-[#696984]">{item.descripition}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
