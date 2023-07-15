import { sobremiData } from "../data/sobremiData"

export default function Sobremi() {
    return(
        <div id="sobremi" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6">
            <div className="flex gap-2 justify-center items-center mx-4 md:mx-0 my-10">
                <div className="w-2.5 h-2.5 rounded-full bg-naranja"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-naranja"></div>
                <div className="w-2.5 h-2.5 flex-grow rounded-full bg-naranja "></div>
            </div>

            <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white text-center md:text-left md:py-5">{sobremiData.titulo}</h2>

            <div className="md:flex mx-4 md:mx-0 mb-16">
                <div className="md:w-3/5 h-5/6">
                    <div className="md:hidden flex justify-center">
                    <img 
                        className="w-60 h-60 md:w-72 md:h-72" 
                        src="/img/sobremi.png" 
                        alt="imagen de sobre mi" />
                    </div>
                    <p className="mb-8 text-lg font-normal text-grisclaro3 lg:text-xl">{sobremiData.descripcion1}</p>
                    <p className="mb-8 text-lg font-normal text-grisclaro3 lg:text-xl">{sobremiData.descripcion2}</p>
                </div>
                <div className="md:w-2/5 h-5/6 flex flex-col items-center md:items-end justify-center">
                    <div className="hidden md:block">
                    <img 
                        className="w-60 h-60 md:w-72 md:h-72" 
                        src="/img/sobremi.png" 
                        alt="Rounded avatar" />
                    </div>
                </div>
            </div>

        </div>
    )
}