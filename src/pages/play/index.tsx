import {useEffect, useState} from "react";
import { query_six } from "@/utils/six"


function Test(props: {name: string}) {
    return (
        <div>{props.name}</div>
    )
}


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


    return (
        <div className="flex justify-center items-center h-screen">

            <div className="border-b-1 border-gray-200 w-[10000px] bg-red-200">
                test
            </div>

            <div>
                Status Loading: { loading.toString() } <br/>
                Data: { JSON.stringify(data) }
            </div>


        </div>
    )
}

export default Game