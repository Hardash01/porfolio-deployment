import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Layout({ children }) {

    return (
        <> 
            <Head>
                <title>Edwin Santos | FrontEnd, React, JavaScript, CSS, HTML</title>
                <meta name='description' content="Desarrollador Web especializado en FrontEnd, Transformando ideas en realidad a traves de codigo limpio y soluciones innovadoras" />
                <link rel="icon" type="image/svg+xml" href="/img/logoicon.webp" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://edwinsantos.dev"></link>
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Edwin Santos" />
                <meta name="keywords" content="desarrollador web, Frontend, desarrollo web, HTML, CSS, JavaScript, React, NextJs, TailwindCss, diseño web, responsive design, desarrollo frontend, portfolio, proyectos web, desarrollo de sitios web" />
                <meta name="og:title" content="Edwin Santos | FrontEnd, React, JavaScript, CSS, HTML" />
                <meta name="og:description" content="Desarrollador Web especializado en FrontEnd, Transformando ideas en realidad a traves de codigo limpio y soluciones innovadoras" />
                <meta name="og:image" content="/img/metaimg.webp" />
                <meta name="og:image:alt" content="Imagen del sitio web de Edwin Santos" />
            </Head>
                
            <Header />

            <main className="font-text overflow-auto scroll-smooth">
                { children }
            </main>

            <Footer />
        </>
    )
}