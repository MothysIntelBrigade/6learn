import {useState} from "react";
import {ArrowDown, ArrowDownSquareFill, ArrowUpRight, InfoLg} from "react-bootstrap-icons";
import {Disclosure} from "@headlessui/react";

export default function StockCard(props: { ticker: string , stock_price : number, budget : number, setBudget : any, info_text : string}) {
    const [count, setCount] = useState(0)


    return (
        <div
            className="w-full"
        >
            <div
                className="p-2 border border-gray-200 bg-white dark:bg-black flex justify-between items-center h-16 rounded-md shadow"
            >

                <div>
                    <div>
                        ${props.ticker}
                        <Disclosure>
                        <Disclosure.Button>
                            <InfoLg className="ml-2 text-sm"/>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            {props.info_text}
                        </Disclosure.Panel>
                        </Disclosure>
                    </div>
                    <div
                        className="text-xs text-gray-400"
                    >
                        {props.stock_price/100}
                        <ArrowUpRight className="inline-block ml-2"/>

                    </div>
                </div>

                <div
                    className="flex justify-between items-center space-x-5"
                >
                    <button
                        disabled={count == 0}
                        className="disabled:text-gray-400 disabled:cursor-not-allowed"
                        onClick={() => {
                            setCount(count - 1)
                            props.setBudget(props.budget + props.stock_price)
                        }}
                    >
                        -
                    </button>
                    <div>
                        {count}
                    </div>
                    <button
                        disabled={props.budget - props.stock_price <= 0}
                        className="disabled:text-gray-400 disabled:cursor-not-allowed"
                        onClick={() => {
                            setCount(count + 1)
                            props.setBudget(props.budget - props.stock_price)}
                        }


                    >
                        +
                    </button>
                </div>
            </div>
        </div>

    )
}