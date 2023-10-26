import { headerData } from "../data/headerData"
import { redesData } from "../data/redesData"
import Link from "next/link"

export default function Landing() {
    return(
        <>  
            <div id="inicio" className="h-screen max-w-screen-xl mx-auto md:w-4/6 2xl:w-4/6 md:flex">
                
                <div className="flex flex-col lg:flex-row items-center justify-center px-3">
                        <div className="lg:w-1/2 lg:order-last grid place-items-end">
                            <div >
                                <img 
                                    className="w-auto h-auto  md:w-auto md:h-auto lg:w-[410px] lg:h-auto 2xl:w-[500px] object-cover object-center pt-5" 
                                    src="/img/edwinsantos.webp" 
                                    alt="Imagen de Perfil" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:order-first">
                            <div className="font-body text-center lg:text-left">
                                <div>
                                    <p className="text-naranja font-semibold text-3xl mb-4 leading-none">Hola, soy</p>
                                    <h1 className="mb-4 text-5xl font-semibold leading-none md:text-7xl lg:text-6xl 2xl:text-7xl text-white">{headerData.nombre}</h1>
                                    <p className="mb-4 text-2xl font-semibold  leading-none md:text-3xl lg:text-4xl text-verde"><span className="text-white font-normal">Un</span> {headerData.titulo}</p>
                                    <p className="mb-8 text-lg font-normal text-grisclaro2 md:text-base 2xl:text-xl [text-wrap:balance]">{headerData.descripcion}</p>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-5">
                                    
                                    <Link legacyBehavior href='https://drive.google.com/file/d/1MImYmpgZPl7CFSKpdqm4a63TiZYyklVd/view'>
                                        <a target="_blank" className="flex gap-1 items-center py-2.5 px-5 text-sm text-white font-medium  bg-naranja rounded-full border transition duration-300 hover:bg-naranja700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            Descargar CV
                                        </a>
                                    </Link>
                                    <ul className='flex gap-4'>
                                        {redesData.map(red => (
                                            <li  key={red.id} className='cursor-pointer transition-all duration-300 hover:scale-150'>
                                                <a target="_blank" href={red.sitioWeb}>
                                                    <img className='w-4 h-4' title={red.nombre} src={`/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
            </div>
            
        </>
    )
}