import Image from "next/image";
import { useState } from 'react';
import { Popover } from '@headlessui/react'
import {Collapse} from "react-bootstrap";
import {Transition} from "react-transition-group";
import useBus, {dispatch} from 'use-bus'
import {Button} from "@restart/ui";

// Displays the fox
export default function Footer() {
    return (
        <div>
            <Fox />
        </div>
    );
}

interface Props {
    text: string,
    increase(): void
}

function FoxText(props: Props) {
    return (
        <Popover
            className="fixed m-5 p-1.5 right-0 bottom-[120px] bg-white width-2/3 rounded-md border border-gray-500 shadow-lg">
            { props.text }
            <Button className={"bg-slate-100 ml-2"} onClick={props.increase}>Continue</Button>
        </Popover>
    )
}



function Fox() {
    let [up, setUp] = useState(false);
    let [idx, setIdx] = useState(0)
    let [texts, setTexts] = useState([""])

    function increaseCounter() {
        if(texts[idx+1])
            setIdx(idx + 1);
        else
            dispatch('incStop');
    }

    useBus('hideFox', () => {
        setUp(false)
    })

    useBus('foxSay', (cb) => {
        console.log('foxSay', cb)
        setTexts(cb.payload)
        setIdx(0)
        setUp(true)
    }, [texts, setTexts, up, setUp])

    function handleClick() {
        setUp(!up);
    }
    // Jump up and down
    // TODO: Animate more nicely
    let style = (up ? ' bottom-0 ' : ' -bottom-[74px] ');
    return (

        <div className='p-0'>
            <div className={'fixed' + style + 'right-[3%]'} style={{transition: "margin 1s linear"}}>
                {up && <FoxText text={texts[idx]} increase={increaseCounter}/>}
                <Image src="/fox.png" alt="fox" width="120" height="64" onClick={handleClick}/>
            </div>
        </div>

    )
}