import {useState} from "react";
import {ArrowUpRight} from "react-bootstrap-icons";

export default function StockCard(props: { ticker: string }) {
    const [count, setCount] = useState(0)


    return (
        <div
            className="w-full"
        >
            <div
                className="p-2 border border-gray-200 bg-white dark:bg-black flex justify-between items-center min-h-15 rounded-md shadow"
            >

                <div>
                    <div>
                        ${props.ticker}
                    </div>
                    <div
                        className="text-xs text-gray-400"
                    >
                        24.45
                        <ArrowUpRight className="inline-block ml-2"/>

                    </div>
                </div>
                <div
                    className="flex justify-between items-center space-x-5"
                >
                    <button
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                    <div>
                        {count}
                    </div>
                    <button
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}