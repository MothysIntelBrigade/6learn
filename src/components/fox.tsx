import Image from "next/image";
import { useState } from 'react';
import { Popover } from '@headlessui/react'

export default function Footer() {
    return (
        <div>
            <Fox />
        </div>
    );
}

function FoxText() {
    return (
        <Popover className="absolute -top-14 bg-blue-100 rounded-md border border-black">
            There are <Popover.Button><u>stocks</u></Popover.Button>.

            <Popover.Panel className="absolute z-10 bg-blue-100 rounded-md border border-black">
                <div className="grid grid-cols-2">
                    Nice
                </div>
            </Popover.Panel>
        </Popover>
    )
}

function Fox() {
    const [up, setUp] = useState(false);

    function handleClick() {
        setUp(!up);
    }
    // Jump up and down
    // TODO: Animate more nicely
    let style = (up ?  ' bottom-0 ':' -bottom-14 ' );
    return (
        <div className='p-0' >
            <div className={'fixed' + style + 'right-[10%]'}>
                {up && <FoxText />}
                <Image src="/fox.png" alt="fox" width="120" height="64"  onClick={handleClick}/>
            </div>
        </div>
    )
}