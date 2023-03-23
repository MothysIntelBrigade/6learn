import {query_six} from "@/utils/six";

export async function getStockPrice(ticker: string, from: string, to: string) {

    let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${ticker}&from=${from}`
    query_six(uri).then(data => {
        console.log(data)
    })

}