import {useEffect, useState} from "react";
import {PlayCircleFill} from "react-bootstrap-icons";
import {StockView} from "@/components/stock_view";
import {MarketPlayback} from "@/components/market_playback";
import { query_six } from "@/utils/six"
import { load_level } from "@/utils/levels"
import EndScreen from "@/components/end_screen";


function Test(props: {name: string}) {
    return (
        <div>{props.name}</div>
    )
}


function Game() {

    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(0);
    const [data, setData] = useState({});
    const [playback, setPlayback] = useState(false);
    const [level, setLevel] = useState({});

    // useEffect(() => {
    //     setLevel(load_level(localStorage.getItem("level")))
    // }, [setLevel, level])
    //
    // useEffect(() => {
    //     if(level.game) {
    //
    //         level.game.tracked_symbols.forEach(v => {
    //             let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${v}&from=${level.game.start}&to=${level.game.end}`
    //             query_six(uri).then(data => {
    //                 setLoaded(loaded + 1)
    //                 setData(data)
    //             })
    //         })
    //
    //     }
    // }, [level, setData, setLoaded])
    //
    // useEffect(() => {
    //     if(level.game) {
    //         console.log(loaded)
    //         if (loaded === level.game.tracked_symbols.length) {
    //             setLoading(false)
    //         }
    //     }
    // }, [setLoading, loaded, level])


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
                className={`${scroll_lock ? "overflow-hidden" : " overflow-x-scroll"} w-full p-2`}
            >

                <div
                    className="w-[3000px] h-[90vh] p-2 rounded-md"
                >
                    {/* This is the screen first presented to the user on /play */}
                    {
                        playback ? (
                            <div>
                                <MarketPlayback/>
                            </div>
                        ) : (
                            <div
                                className="w-[90vw]"
                            >

                                <div
                                    className="w-full p-5"
                                >

                                    <div>
                                        <h1
                                            className="text-2xl font-bold"
                                        >{game_title}</h1>

                                        <p
                                            className="text-sm text-gray-500 text-justify"
                                        >{game_description}</p>
                                    </div>

                                    <div
                                        className="flex justify-center items-center my-24"
                                    >
                                        <button
                                            className="disabled:text-gray-500 disabled:cursor-not-allowed"

                                            onClick={
                                                () => {
                                                    setPlayback(true)
                                                }
                                            }
                                        >
                                            <PlayCircleFill size={40}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div
                        className="fixed bottom-0 left-0 w-full"
                    >
                        <StockView/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game