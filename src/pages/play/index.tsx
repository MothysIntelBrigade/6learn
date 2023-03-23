import {useEffect, useState} from "react";
import {query_six} from "@/utils/six"
import {PlayCircleFill} from "react-bootstrap-icons";
import StockCard from "@/components/stock_card";


function Game() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const ticker_bc = 'AAPL_67';
    const from = '2023-01-01';
    const to = '2023-01-30';


    useEffect(() => {
        let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${ticker_bc}&from=${from}&to=${to}`
        query_six(uri).then(data => {
            setLoading(false);
            setData(data)
        })
    }, [setLoading, setData])


    const game_title = "Round 1"
    const game_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const scroll_lock = false

    const data2 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
            }
        ]
    }

    return (
        <div className="flex justify-center items-center h-screen w-full">

            <div
                className={`${scroll_lock ? "overflow-hidden" : " overflow-x-scroll"} border-b-1 border-gray-200 w-full p-2`}
            >
                <div
                    className="w-[10000px] border border-gray-200 h-[90vh] p-2 rounded-md"
                >
                    <div
                        className="w-[90vw]"
                    >

                        <div
                            className="w-full p-5"
                        >

                            <h1
                                className="text-2xl font-bold"
                            >{game_title}</h1>

                            <p
                                className="text-sm text-gray-500 text-justify"
                            >{game_description}</p>

                            <div
                                className="flex justify-center items-center my-5"
                            >
                                <PlayCircleFill size={40}/>
                            </div>

                            <div
                                className="fixed bottom-0 left-0 w-full"
                            >
                                <div
                                    className="mx-2"
                                >
                                <div className="text-sm mb-1">Budget: 20$</div>
                                <div
                                    className="space-y-2 mb-2"
                                >
                                    <StockCard ticker={"APPL"}/>
                                    <StockCard ticker={"AMZN"}/>
                                    <StockCard ticker={"TSLA"}/>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/*<div>*/}
            {/*    Status Loading: { loading.toString() } <br/>*/}
            {/*    Data: { JSON.stringify(data) }*/}
            {/*</div>*/}


        </div>
    )
}

export default Game