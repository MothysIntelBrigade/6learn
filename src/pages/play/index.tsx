import {useEffect, useState} from "react";
import {PlayCircleFill} from "react-bootstrap-icons";
import {StockView} from "@/components/stock_view";
import {MarketPlayback} from "@/components/market_playback";
import { query_six } from "@/utils/six"
import { load_level } from "@/utils/levels"
import EndScreen from "@/components/end_screen";
import useBus, {dispatch} from "use-bus";

interface LevelMetadata {
    id: number|string,
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

    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(0);
    const [data, setData] = useState({});
    const [playback, setPlayback] = useState(false);
    const [level, setLevel] = useState<Level|undefined>(load_level(1) as Level);
    const [stop, setStop] = useState<number>(0);

    const [news, setNews] = useState({})
    const [showNews, setShowNews] = useState(false)



    useBus('showEnd', () => {
        alert('Implement: showEnd')
        dispatch('hideFox')
    })


    useBus('incStop', () => {
        console.log("incStop")
        alert("next stop")
        console.log(level.game.stops.length)
        console.log(stop+1)
        if(stop + 1 < level.game.stops.length) {

            setStop(stop + 1)

        }
        else {
            dispatch('showEnd')
        }
    }, [level, stop])

    useEffect(() => {

        if(playback && typeof level != "undefined") {
            console.log("dispatching")
            setTimeout(() => {
                dispatch({type: 'foxSay', payload: level.game.stops[stop].dialogs})
                if(level.game.stops[stop].news.length > 0) {
                    setNews(level.game.stops[stop].news[0])
                    setShowNews(true)
                } else {
                    setShowNews(false)
                }
            }, 500)

        } else {
            console.log("Level undefined")
        }


    }, [stop, level, playback])

    if(!level)
        return (<div>Loading...</div>);

   const scroll_lock = false


    return (
        <div className="flex flex-col justify-center items-center h-screen w-full ">

            <div className="w-full p-2 mt-20">
                { showNews &&
                <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-blue-400"
                     role="alert">
                    <span className="font-medium">{
                        news.title
                    }</span> { news.text }
                </div>
                }
            </div>

            <div
                className={`${scroll_lock ? "overflow-hidden" : " overflow-x-scroll"} w-full p-2`}
            >

                <div
                    className="w-[3000px] h-[90vh] p-2 rounded-md "
                >
                    {/* This is the screen first presented to the user on /play */}
                    {
                        playback ? (
                            <div>
                                <h1
                                    className="text-2xl mt-10 font-bold"
                                >{level.metadata.title}</h1>
                                <MarketPlayback level={level}/>
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
                                            className="text-2xl mt-10 font-bold"
                                        >{level.metadata.title}</h1>

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
                        <StockView showFull={!playback}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game