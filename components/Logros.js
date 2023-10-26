import { logrosData } from "../data/logrosData"
import Image from "next/image";

export default function Logros() {
  return (
    <div id="logros" className=" max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6">
        <h2 className="mb-16 md:mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white text-center md:text-left md:py-5">Logros</h2>
        <div className=" grid grid-cols-1 gap-3 rounded-lg mb-16 mx-3 md:mx-0">
            {logrosData.map(logro => (
            <div key={logro.id} className="block md:flex items-center justify-center bg-gris rounded-lg py-3">
                    <div className="md:w-2/6 ml-2 mb-3 md:mb-0 flex justify-center">
                        <a target="_blank" href={logro.sitioWeb} className="rounded ">
                            <Image src={`/img/${logro.imagen}.jpg`} width={300} height={200} alt={`imagen de ${logro.titulo}`} />
                        </a>
                    </div>
                    <div className="w-6/6 md:w-4/6 mx-2">
                        <h5 className="mb-2 text-2xl text-white text-center md:text-left font-bold tracking-tight">{logro.titulo}</h5>
                        <p className="mb-2 font-normal text-grisclaro2">{logro.descripcion}</p>
                        <div className="flex justify-between">
                            <p className="text-white font-medium">{logro.fecha}</p>
                            <a href={logro.sitioWeb} className="text-center md:text-right">
                            <p className="text-base text-naranja font-medium transition duration-300 hover:text-naranja700">Ver certificado</p>
                        </a>
                        </div>
                    </div>
            </div>
            ))}
        </div>
    </div>
  );
}