import {useState} from "react";
import {ArrowDown, ArrowDownSquareFill, ArrowUpRight, InfoCircle, InfoLg} from "react-bootstrap-icons";
import {Disclosure} from "@headlessui/react";

export default function StockCard(props: { stock: Stock, budget: number, setBudget: any }) {
    const [count, setCount] = useState(0)


    return (
        <div
            className="w-full"
        >
            <div
                className="p-2 border border-gray-200 bg-white dark:bg-black flex justify-between items-center min-h-16 rounded-md shadow"
            >

                <div>
                    <div
                        className="flex justify-between items-baseline"
                    >
                        <Disclosure>
                            <div>
                                <div>
                                    <Disclosure.Button>
                                        <div
                                            className="flex justify-between items-center"
                                        >
                                            {props.stock.name} <InfoCircle className="ml-2 inline-block"/>
                                        </div>
                                    </Disclosure.Button>
                                </div>
                                <div
                                    className="my-2 text-xs text-gray-500"
                                >
                                    <Disclosure.Panel>
                                        {props.stock.description}
                                    </Disclosure.Panel>
                                </div>
                            </div>
                        </Disclosure>

                    </div>
                    <div
                        className="text-xs text-gray-400"
                    >
                        {props.stock.ticker} {props.stock.price / 100}
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
                            props.setBudget(props.budget + props.stock.price)
                        }}
                    >
                        -
                    </button>
                    <div>
                        {count}
                    </div>
                    <button
                        disabled={props.budget - props.stock.price <= 0}
                        className="disabled:text-gray-400 disabled:cursor-not-allowed"
                        onClick={() => {
                            setCount(count + 1)
                            props.setBudget(props.budget - props.stock.price)
                        }
                        }
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

    )
}