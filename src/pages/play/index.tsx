import {useEffect, useState} from "react";
import {PlayCircleFill} from "react-bootstrap-icons";
import {StockView} from "@/components/stock_view";
import {MarketPlayback} from "@/components/market_playback";
import {query_six} from "@/utils/six"
import {load_level} from "@/utils/levels"
import EndScreen from "@/components/end_screen";
import useBus, {dispatch} from "use-bus";
import Temp from "@/pages/temp";
import Router from "next/router";

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
    const [stop, setStop] = useState<number>(0);

    const [news, setNews] = useState({})
    const [showNews, setShowNews] = useState(false)



    useBus('showEnd', () => {
        dispatch('hideFox')
        // ugly for now
        Router.push({
            pathname: '/test'
        })
    })


    useBus('incStop', () => {
        console.log("incStop")
       // alert("next stop")
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
                    // not showing news for now
                   // setShowNews(true)
                } else {
                    setShowNews(false)
                }
            }, 500)
        } else {
            console.log("Level undefined")
        }


    }, [stop, level, playback])

    if (!level)
        return (<div>Loading...</div>);

    const scroll_lock = false


    return (

        <div>
            { showNews &&
                <div className="w-full p-2 fixed fixed-top">

                    <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-blue-400"
                         role="alert">
                    <span className="font-medium">{
                        news.title
                    }</span> { news.text }
                    </div>

                </div>


            }

            <div className="flex flex-col justify-center items-center  w-full ">

                <div
                    className={`${scroll_lock ? "overflow-hidden" : " overflow-x-scroll"} overflow-y-hidden w-full p-2`}
                >

                    <div
                        className="w-[3000px] h-[80vh] p-2 rounded-md mt-5"
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
                                                        dispatch('foxInit')
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
        </div>


    )
}

export default Game