import StockCard from "@/components/stock_card";
import {useEffect, useState} from "react";
import useBus from "use-bus";

export function StockView() {
    const [budget, setBudget] = useState(10000)
    const [showFull, setShowFull] = useState(true)


    const stocks: Stock[] = [
        {
            ticker: "APPL",
            name: "Apple Inc.",
            price: 2445,
            description: "Apple is an american multinational technology company that specializes in consumer electronics, computer software, and online services.",
        },
        {
            ticker: "AMZN",
            name: "Amazon",
            price: 8756,
            description: "Test Description",
        },{
            ticker: "GOGL",
            name: "Google",
            price: 1234,
            description: "Test Description",
        }
    ]

    useBus('start', () => {
        setShowFull(false)
    })

    return (
        <div
            className="mx-2"
            onClick={
                () => {
                    if (!showFull) {
                        setShowFull(true)
                    }
                }
            }
        >
            {
                showFull && (
                    <div
                        className="flex justify-between items-center mb-1 text-sm"
                    >

                        <div className="">Budget: {budget / 100}$</div>
                        <div>
                            <button
                                className=" underline"
                                onClick={() => {
                                    setShowFull((prev) => !prev)
                                }
                                }
                            >{showFull ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                )
            }
            <div
                className="space-y-2 mb-2 relative"
            >
                <div
                    className="w-full transform transition-all ease-in-out duration-500"
                    translate="yes"
                    style={!showFull ?
                        {
                            transform: `translateY(128px)`,
                        } : {}
                    }
                >
                    <StockCard budget={budget} setBudget={setBudget} stock={stocks[0]}/>
                </div>
                <div
                    className="w-full transform transition-all ease-in-out duration-200"
                    translate="yes"
                    style={!showFull ?
                        {
                            transform: `translateY(64px)`,
                        } : {}
                    }
                >
                    <StockCard stock={stocks[1]} budget={budget} setBudget={setBudget}/>
                </div>
                <div
                    className="w-full transform transition-all ease-in-out"
                >
                    <StockCard stock={stocks[2]} budget={budget} setBudget={setBudget}/>
                </div>
            </div>

        </div>
    )
}