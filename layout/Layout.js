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
            </Head>
                
            <Header />

            <main className="font-text">
                { children }
            </main>

            <Footer />
        </>
    )
}