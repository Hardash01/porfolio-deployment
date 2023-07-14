import Header from "../components/Header"
import Landing from "../components/Landing"
import Sobremi from "../components/Sobremi"
import Proyectos from "../components/Proyectos"
import Tecnologias from "../components/Tecnologias"
import Logros from "../components/Logros"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"

export default function Home() {
  return (
    <>  
        <Head>
            <title>Edwin Santos</title>
            <meta name='description' content="Edwin Santos Desarrollador web, Porfolio" />
        </Head>
        <Header />
        <Landing />
        <Sobremi />
        <Proyectos />
        <Tecnologias />
        <Logros />
        <Contacto />
        <Footer/>
        <ToastContainer/>
    </>
    
  )
}
