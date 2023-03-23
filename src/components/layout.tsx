import Navbar from './navbar'
import {ReactNode} from "react";
// import Footer from './footer'
import Footer from "@/components/fox"

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <Navbar />
            <div
            >{children}</div>
            {/*<Footer />*/}
            <Footer />
        </>
    )
}