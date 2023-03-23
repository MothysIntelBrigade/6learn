import StockCard from "@/components/stock_card";
import {useEffect, useState} from "react";

export function StockView(props: {showFull: boolean}) {
    const [budget, setBudget] = useState(10000)
    const [showFull, setShowFull] = useState(true)


    useEffect(() => {
        if (props.showFull) {
            setShowFull(true)
        }
    }, [props.showFull])

    // function getClassName(index: number) {
    //     return showFull ? `w-full transform transition-all ease-in-out translate-y-${index*8}` : ""
    // }

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
                    <StockCard ticker={"APPL"} stock_price={2445} budget={budget} setBudget={setBudget} info_text="Hi"/>
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
                    <StockCard ticker={"AMZN"} stock_price={3445} budget={budget} setBudget={setBudget} info_text="Ho"/>
                </div>
                <div
                    className="w-full transform transition-all ease-in-out"
                >
                    <StockCard ticker={"TSLA"} stock_price={4445} budget={budget} setBudget={setBudget} info_text="He"/>
                </div>
            </div>

        </div>
    )
}