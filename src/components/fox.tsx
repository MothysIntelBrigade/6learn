import Image from "next/image";
import { useState } from 'react';

export default function Footer() {
    return (
        <div>
            <Fox />
        </div>
    );
}

function Fox() {
    const [up, setUp] = useState(false);

    function handleClick() {
        setUp(!up);
    }
    let style = (up ?  'fixed bottom-0 right-20'  :  'fixed -bottom-12 right-20' );
    return (
        <>
            <div className={style}>
                    <Image src="/fox.jpg" alt="logo" width="128" height="64"  onClick={handleClick}/>
            </div>
        </>

    )
}