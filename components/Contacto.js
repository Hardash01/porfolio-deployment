import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { redesData } from '../data/redesData';
import { toast } from "react-toastify"

export default function Contacto() {
    const form = useRef();
    const [formError,setFormError] = useState(false)
    const [formValues, setFormValues] = useState({})

    const sendEmail = (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = form.current;
        if (!nombre.value || !email.value || !mensaje.value) {
            setFormError(true);
            return;
        }

        emailjs.sendForm('service_4ahhxwl', 'template_dm4vv9y', form.current, 'IYV1jTyhjv08dD_Qs')
        .then((result) => {
        toast.success("Mensaje Enviado Correctamente", {
            theme: "colored"
          });
    
          // Restablecer los valores de los campos del formulario
          setFormValues({});
          form.current.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    };

    const handleInputChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        });
      };

    return(
        <div>
            <div id='contacto' className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 py-10 px-3 md:px-0">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mb-10">Contacto</h2>
                <div className="grid md:grid-cols-2 gap-6 content-center items-center mb-16">
                    <div className=' rounded-lg bg-black py-5 px-5 bg-black border border-grisclaro border-opacity-20 bg-opacity-30'>
                        {formError && (
                            <div className="mb-3">
                            <p className="text-red-500">Por favor, completa todos los campos del formulario.</p>
                            </div>
                        )}
                        <form ref={form} onSubmit={sendEmail}>
                            
                        <div className="mb-6">
                            <label htmlFor="nombre" className="block mb-2  font-medium text-white">Tu Nombre</label>
                            <input type="text" value={formValues.nombre || ""} onChange={handleInputChange} id="nombre" name="nombre" placeholder="Escribe tu nombre" className=" bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2  font-medium text-white">Tu Correo</label>
                            <input type="email" value={formValues.email || ""} onChange={handleInputChange} id="email" name="email" className=" bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300" placeholder="Escribe tu correo electronico" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="mensaje" className="block mb-2  font-medium text-white">Tu Mensaje</label>
                            <textarea id="mensaje" value={formValues.mensaje || ""} onChange={handleInputChange} name="mensaje" rows="4" className="bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300 resize-none" placeholder="Escribe tu Mensaje aqui" required></textarea>
                        </div>
                        <button type="submit" className="flex flex-1 gap-1 items-center justify-center py-2.5 px-8 text-sm text-white font-medium  bg-colorboton rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(30,125,103,0.7)]">Enviar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className='flex gap-3 items-center justify-center mb-4'>
                            <div className='bg-naranja rounded-full p-1 '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className='text-white text-sm font-semibold'>El Salvador</p>
                        </div>
                        <img className='w-auto h-56' src="/img/redes.svg" alt="imagen de redes" />
                        <p className='mb-3 mt-3 text-2xl text-white text-center md:text-left font-bold tracking-tight'>Redes Sociales</p>
                        <div className='flex gap-3'>
                            {redesData.map(red => (
                                <div  key={red.id} className='bg-naranja border border-grisclaro2 rounded-full p-2 hover:bg-naranja700 transition duration-300'>
                                    <a target="_blank" href={red.sitioWeb}>
                                        <img className='w-8 h-8 p-1' src={`/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}