import Image from "next/image";
import { useState } from 'react';
import { Popover } from '@headlessui/react'

// Displays the fox
export default function Footer() {
    return (
        <div>
            <Fox />
        </div>
    );
}

function FoxText() {
    return (
        <Popover
            className="fixed m-5 p-1.5 right-0 bottom-[120px] bg-white width-2/3 rounded-md border border-gray-500 shadow-lg">
            A stock is a type of <Popover.Button><p className="underline decoration-dashed">investment</p>
        </Popover.Button> that represents an ownership share in a company.
            <Popover.Panel className="absolute z-10 m-2 p-1  rounded-md bg-white border border-gray-500 shadow-lg">
                Investment or investing means that an asset is bought, or that money is put into a bank to get a future
                interest from it.
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
    let style = (up ? ' bottom-0 ' : ' -bottom-[74px] ');
    return (
        <div className='p-0'>
            <div className={'fixed' + style + 'right-[3%]'}>
                {up && <FoxText/>}
                <Image src="/fox.png" alt="fox" width="120" height="64" onClick={handleClick}/>
            </div>
        </div>
    )
}