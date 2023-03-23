import {LineChart, Line, XAxis, ResponsiveContainer, Legend, CartesianGrid, YAxis} from 'recharts';
import {Level} from "@/pages/play";
import {getEODEquidistant} from "@/utils/six";
import {useEffect, useState} from "react";
import {GetColor} from '@tafalk/material-color-generator'
import EndScreen from "@/components/end_screen";

interface MarketPlaybackProps {
    level: Level
}

export function MarketPlayback({level}: MarketPlaybackProps) {

    let [data, setData] = useState({})
    let [dates, setDates] = useState([])

    useEffect(() => {
        level.game.tracked_symbols.forEach(symbol => {
            getEODEquidistant(symbol, level.game.start, level.game.end, 30).then(result => {
                data[symbol] = result;
                setData({...data})
                setDates(result.reduce((a, b) => {
                    return [...a, {'date': b['date']}]
                }, []))
                console.log(dates)
            })
        })
    }, [level, setData])


    return (
        <div style={{minHeight: "60vh"}} className={"mt-3"}>
            <div
                className="flex items-baseline space-x-1 "
            >
                <span>
                    Your portfolio:
                </span>
                <span className="h-3 w-3 rounded-full inline-block bg-red-500"></span>
            </div>
            <div
                className="flex"
            >
                {/*<ResponsiveContainer width="100%" height="100%" minHeight="60vh">*/}
                {/*    <LineChart>*/}
                {/*        {*/}
                {/*            level.game.tracked_symbols.map(symbol => {*/}
                {/*                return (*/}
                {/*                    <Line name={symbol} key={symbol} type="monotone" data={data[symbol]}*/}
                {/*                          dataKey={"normalized"} stroke={`#${GetColor(symbol, 'dark')}`}*/}
                {/*                          strokeWidth={2}/>*/}
                {/*                )*/}
                {/*            })*/}
                {/*        }*/}
                {/*        <XAxis data={dates} dataKey={'date'} allowDuplicatedCategory={false}/>*/}
                {/*        /!*<YAxis tick={false} unit={'%'} domain={['auto', 'auto']}/>*!/*/}
                {/*        /!*<CartesianGrid stroke="#eee" strokeDasharray="0.25 0.25"/>*!/*/}
                {/*    </LineChart>*/}
                {/*</ResponsiveContainer>*/}
                <div
                    className="h-full"
                >

                </div>

                {/*<EndScreen/>*/}
            </div>

        </div>
    )
}