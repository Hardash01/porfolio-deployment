import { proyectosData } from "../data/proyectosData"

export default function Proyectos() {
    return(
        <div id="proyectos" className="max-w-screen-xl mx-auto md:w-4/6">
            <h2 className="mb-16 md:mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white text-center md:text-left md:py-5">Proyectos</h2>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16 md:mx-0 mx-3">
                {proyectosData.map(proyecto =>(
                    <div key={proyecto.id} className="max-w-sm bg-gris mb-3 rounded-lg ">
                        <a href={proyecto.sitioWeb}>
                            <img className="rounded-t-lg" src={`/img/${proyecto.imagen}.jpg`} alt={`imagen de ${proyecto.nombreProyecto}`} />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl text-center text-white font-bold tracking-tight">{proyecto.nombreProyecto}</h5>
                            <p className="mb-3 font-normal text-grisclaro2">{proyecto.descripcionProyecto}</p>
                            <div className="flex gap-1 items-center justify-center">
                                <a target="_blank" href={proyecto.sitioWeb} className="flex-1 flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm text-white font-medium bg-naranja rounded-full border transition duration-300 hover:bg-naranja700">
                                    Sitio Web
                                </a>
                                <a target="_blank" href={proyecto.github} className="flex-1 flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm text-white font-medium focus:outline-none bg-gris rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-200 transition duration-300 hover:bg-grisclaro">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}