import {useState} from "react";
import {ArrowUpRight} from "react-bootstrap-icons";

export default function StockCard(props: { ticker: string , stock_price : number, budget : number, setBudget : any}) {
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
                        {props.stock_price/100}
                        <ArrowUpRight className="inline-block ml-2"/>

                    </div>
                </div>
                <div
                    className="flex justify-between items-center space-x-5"
                >
                    <button
                        className={`- ${(count == 0) ? "text-gray-400": ""}`}
                        disabled={count == 0}
                        onClick={() => {
                            if (count > 0){
                            setCount(count - 1)}
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