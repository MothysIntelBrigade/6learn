import {useEffect, useState} from "react";
import {PlayCircleFill} from "react-bootstrap-icons";
import {StockView} from "@/components/stock_view";
import {MarketPlayback} from "@/components/market_playback";
import {query_six} from "@/utils/six"
import {load_level} from "@/utils/levels"
import EndScreen from "@/components/end_screen";
import Temp from "@/pages/temp";

interface LevelMetadata {
    id: number | string,
    title: string,
    description: string
}

interface LevelGame {
    start: string,
    end: string,
    capital: number,
    tracked_symbols: string[],
    stops: object[]
}

export interface Level {
    game: LevelGame,
    metadata: LevelMetadata,
}

function Game() {

    const [playback, setPlayback] = useState(false);
    const [touched, setTouched] = useState(false);
    const [level, setLevel] = useState<Level | undefined>(load_level(1) as Level);

    if (!level)
        return (<div>Loading...</div>);

    const scroll_lock = false


    return (
        <div className="flex justify-center items-center h-screen w-full">

            <div
                className={`${scroll_lock ? "overflow-hidden" : " overflow-x-scroll"} w-full p-2`}
            >

                <div
                    className="w-[3000px] h-[90vh] p-2 rounded-md mt-5"
                >
                    <h1
                        className="text-2xl mt-10 font-bold"
                    >{level.metadata.title}</h1>
                    {/* This is the screen first presented to the user on /play */}
                    {
                        playback ? (
                            <div>
                                <Temp/>
                            </div>
                        ) : (
                            <div
                                className="w-[90vw]"
                            >

                                <div
                                    className="w-full py-5"
                                >

                                    <div>
                                        <p
                                            className="text-sm text-gray-500 text-justify"
                                        >{level.metadata.description}</p>
                                    </div>

                                    <div
                                        className="flex justify-center items-center my-16"
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
                        <StockView showFull={!playback} running={playback}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game