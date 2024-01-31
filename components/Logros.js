import { logrosData } from "../data/logrosData"
import Link from "next/link";

export default function Logros() {
  return (
        <div>
            <div id="logros" className=" max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 py-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mb-10">Logros</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mx-3 md:mx-0">
                    {logrosData.map(logro => (
                    <div key={logro.id} className="relative overflow-hidden group rounded-lg bg-black border border-grisclaro border-opacity-20 bg-opacity-20">
                        <div
                            className="bg-cover bg-center w-full h-80 transition duration-500 transform group-hover:scale-110"
                            style={{ backgroundImage: `url(/img/${logro.imagen}.webp)` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition duration-300"></div>
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                            <div className="flex items-end justify-end opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-grisclaro2">{logro.fecha}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                <Link legacyBehavior href={logro.sitioWeb}>
                                    <a target="_blank" className="flex gap-1 items-center py-2.5 px-5 text-sm text-white font-medium rounded-full border transition duration-300 bg-colorboton hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_40px_3px_rgba(30,125,103,0.7)] opacity-0 group-hover:opacity-100 transition duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                                        </svg>
                                        Ver Certificado
                                    </a>
                                </Link>
                            </div>
                            <div className="text-white opacity-0 group-hover:opacity-100 transition duration-500">
                                <h2 className="text-xl font-bold">{logro.titulo}</h2>
                                <p className="mt-2 text-sm text-grisclaro2">{logro.descripcion}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
}