import {getEODEquidistant} from "@/utils/six";
import {query_six} from "@/utils/six";
import {toString} from "autoprefixer";
import {useEffect, useState} from "react";

function phi(i, fi) {
    let x = Number(i)
    let fx = Number(fi)
    return (4 * x).toString() + " " + Math.round(fx).toString()
}

export function getStockPrice(ticker: string, from: string, to: string) {

    let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${ticker}&from=${from}`
    return query_six(uri).then(data => {
        console.log(data.data.listings[0].marketData.eodTimeseries)
        let datae = data.data.listings[0].marketData.eodTimeseries
        let res = "M " + phi(0, datae[0].close) + " "
        for (let i in datae) {
            if (datae[i].close) {
                res += "L " + phi(i, datae[i].close) + " "
            }
        }
        // console.log(data["listings"])
        return res
    })

}

function Settings() {

    const [path, setPath] = useState("")


    getStockPrice("AAPL_67", "2023-01-30", "2023-01-30").then(res => {
        setPath(res)
    })
    console.log(path)
    return (<svg className={"w-full"} height="500" xmlns="http://www.w3.org/2000/svg">

        <path d={path} fill="transparent" stroke="black"></path>
    </svg>)
    // console.log(getEODEquidistant("AAPL_67", "2023-01-30", "2023-01-30", 30))
    // return (
    //     <div>
    //
    //     <h1>Nothing to see here! </h1>
    //     </div>
    //
    // )
}

export default Settings