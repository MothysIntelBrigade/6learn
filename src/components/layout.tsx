import Navbar from './navbar'
// import Footer from './footer'
import Footer from "@/components/fox"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main
            >{children}</main>
            {/*<Footer />*/}
            <Footer />
        </>
    )
}