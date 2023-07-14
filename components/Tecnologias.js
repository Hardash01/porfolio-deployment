import { tecnologiasData } from "../data/tecnologiasData"

export default function Tecnologias () {
    return(
        <div className="max-w-screen-xl mx-auto md:w-4/6">
            <h2 className="mb-16 md:mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white text-center md:text-left md:py-5">Habilidades</h2>
            <div className="grid place-content-center md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 mb-16 md:mx-0 mx-3">
                {tecnologiasData.map(tecnologia => (
                    <div key={tecnologia.id} className="flex items-center bg-gris rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 hover:bg-grisoscuro duration-300">
                        <img className="w-10 h-10" src={`/img/${tecnologia.imagen}.svg`} alt={`imagen de logo ${tecnologia.nombre}`}/>
                        <div className="font-medium dark:text-white">
                            <p>{tecnologia.nombre}</p>
                            <p className="font-normal text-grisclaro2">{tecnologia.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}