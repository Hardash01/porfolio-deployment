import Image from "next/image"

export default function Footer() {
    return(
        <div className="bg-grisoscuro">
            <div className="max-w-screen-xl mx-auto md:w-4/6">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mx-3 md:mx-0 py-10">
                    <a href="#" className="">
                        <Image src="/img/logo.svg" width={110} height={35} alt="Logo EdwinSantos" />
                    </a>
                    <div
                        className="mb-3"
                    >
                        <ul className="font-medium flex flex-col text-center gap-3 justify-between rounded-lg">
                            <li>
                                <a href="#sobremi" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                                    Sobre mi
                                </a>
                            </li>
                            <li>
                                <a href="#proyectos" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#logros" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                                    Logros
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="block py-2 pl-3 pr-4 text-white rounded transition duration-300 hover:bg-naranja md:p-1">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex md:flex-col gap-2 mt-3 md:mt-0">
                        <p className="text-white font-medium mb-3">Creado con:</p>
                        <div className="flex gap-1 mb-3">
                            <img className="w-auto h-7 md:h-10 bg-gris transition duration-300 rounded-full p-1 hover:bg-naranja700" src="/img/nextjs.svg" alt="Logo de NextJs" />
                            <img className="w-auto h-7 md:h-10 bg-gris transition duration-300 rounded-full p-1 hover:bg-naranja700" src="/img/tailwind.svg" alt="Logo de Tailwindcss" />
                            <img className="w-auto h-7 md:h-10 bg-gris transition duration-300 rounded-full p-1 hover:bg-naranja700" src="/img/react.svg" alt="Logo de Tailwindcss" />
                        </div>
                        <p className="text-white font-medium mb-3">por <span className="font-semibold text-lg hover:text-naranja">Edwin Santos</span></p>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}