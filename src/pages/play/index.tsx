import {useEffect, useState} from "react";
import { query_six } from "@/utils/six"
import { load_level } from "@/utils/levels"


function Test(props: {name: string}) {
    return (
        <div>{props.name}</div>
    )
}


function Game() {

    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(0);
    const [data, setData] = useState({});
    const [level, setLevel] = useState({});

    useEffect(() => {
        setLevel(load_level(localStorage.getItem("level")))
    }, [setLevel, level])

    useEffect(() => {
        if(level.game) {

            level.game.tracked_symbols.forEach(v => {
                let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${v}&from=${level.game.start}&to=${level.game.end}`
                query_six(uri).then(data => {
                    setLoaded(loaded + 1)
                    setData(data)
                })
            })

        }
    }, [level, setData, setLoaded])

    useEffect(() => {
        if(level.game) {
            console.log(loaded)
            if (loaded === level.game.tracked_symbols.length) {
                setLoading(false)
            }
        }
    }, [setLoading, loaded, level])


    return (
        <div className="flex justify-center items-center h-screen">

            <div className="border-b-1 border-gray-200 w-[10000px] bg-red-200">
                Loading: { loading.toString() }
            </div>

            <h1 className={"text-h1"}>
                {
                    level.metadata && level.metadata.title
                }
            </h1>
            <p>
                {
                    level.metadata && level.metadata.description
                }
            </p>



        </div>
    )
}

export default Game