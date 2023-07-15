import { headerData } from "../data/headerData"
import Link from "next/link"

export default function Landing() {
    return(
        <>  
            <div id="inicio" className="">
                <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 md:flex">
                    <div className=" md:w-2/5 h-5/6 ">
                        <div className="h-96 flex flex-col items-center justify-center md:mt-10 md:mb-5 lg:mt-20 lg:mb-10">
                            <img 
                                className="w-60 h-60 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full border-8 border-naranja" 
                                src="/img/edwinsantos.jpg" 
                                alt="Imagen de Perfil" />
                        </div>
                    </div>
                    <div className="md:w-3/5 h=5/6 text-center">
                        <div className="md:h-96 flex flex-col items-center justify-center md:mt-10 md:mb-5 lg:mt-20 lg:mb-10">
                            <div>
                                <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">{headerData.nombre}</h1>
                                <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-naranja">{headerData.titulo}</p>
                                <p className="mb-8 text-lg font-normal text-grisclaro3 lg:text-xl sm:px-16 md:px-3">{headerData.descripcion}</p>
                            </div>
                            <div className="flex gap-2">
                                
                                <Link legacyBehavior href='https://drive.google.com/file/d/1MImYmpgZPl7CFSKpdqm4a63TiZYyklVd/view'>
                                    <a target="_blank" className="flex gap-1 items-center py-2.5 px-5 mr-2 mb-2 text-sm text-white font-medium  bg-naranja rounded-full border transition duration-300 hover:bg-naranja700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                        Descargar CV
                                    </a>
                                </Link>
                                <Link legacyBehavior href='#contacto'>
                                    <a className="flex gap-1 items-center py-2.5 px-5 mr-2 mb-2 text-sm text-white font-medium focus:outline-none transition duration-300 bg-gris rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-200 hover:bg-grisclaro">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        Contacto
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </>
    )
}