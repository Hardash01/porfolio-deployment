import { tecnologiasData } from "../data/tecnologiasData"

export default function Tecnologias () {
    return(
        <div>
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 py-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mb-10">Habilidades</h2>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mb-16 ">
                    <div className=" flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
                        {tecnologiasData.map(tecnologia => (
                            <ul key={tecnologia.id} className="flex items-center">
                                <li className=" flex items-center gap-2">
                                    <img className="w-14 h-14 filter grayscale" src={`/img/${tecnologia.imagen}.svg`} alt={`imagen de logo ${tecnologia.nombre}`}/>
                                    <div className="font-medium dark:text-white">
                                        <p className="text-2xl font-semibold">{tecnologia.nombre}</p>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mb-16  scale-x-[-1]">
                    <div className=" flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
                        {tecnologiasData.map(tecnologia => (
                            <ul key={tecnologia.id} className="flex items-center scale-x-[-1]">
                                <li className=" flex items-center gap-2">
                                    <img className="w-14 h-14 filter grayscale" src={`/img/${tecnologia.imagen}.svg`} alt={`imagen de logo ${tecnologia.nombre}`}/>
                                    <div className="font-medium dark:text-white">
                                        <p className="text-2xl font-semibold">{tecnologia.nombre}</p>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}