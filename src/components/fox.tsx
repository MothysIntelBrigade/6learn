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
            <Popover.Button>I am the fox</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
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