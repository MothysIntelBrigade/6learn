import {query_six} from "@/utils/six";

function phi(i: string, fi: string, dx: number, dy: number, h: number, ymin: number) {
    let x = Number(i)
    let fx = Number(fi)
    return Math.round(dx * x).toString() + " " + Math.round(h - dy * (fx - ymin)).toString()
}

export async function svgPathMaker(ticker: string, from: string, to: string, width: number, height: number, step: number) {
    let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${ticker}&from=${from}`
    return query_six(uri).then(data => {
        let ts = data.data.listings[0].marketData.eodTimeseries
        let dx = width / ts.length
        let max = 0
        let min = 1000
        for (let i in ts) {
            if (Number(ts[i].close) > max) max = Number(ts[i].close);
            if (Number(ts[i].close) < min) min = Number(ts[i].close);
        }
        console.log("Max", max, min)
        let dy = height / (max - min)
        console.log(dx, dy)
        let res = "M " + phi("0", ts[0].close, dx, dy, height, min) + " "
        for (let i = 0; i < ts.length; i += step) {
            let j = i.toString()
            if (ts[j].close) {
                res += "L " + phi(j, ts[j].close, dx, dy, height, min) + " "
            }
        }
        console.log(data["listings"])
        return res
    })

}
