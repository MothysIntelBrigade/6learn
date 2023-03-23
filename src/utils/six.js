export function query_six(uri){
    return fetch (uri, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "api-version": "2023-01-01",
            "Accept-Encoding": "gzip",
            "Accept": "application/json"
        }
    }).then((response) => response.json())
}

export function interpolate_dates(start_date, end_date, num_tick_marks) {
    let dates_interpolated = []

    const start_date_obj = new Date(start_date)
    const end_date_obj = new Date(end_date)
    const time_diff = end_date_obj.getTime() - start_date_obj.getTime()
    const time_diff_days = time_diff / (1000 * 3600 * 24)
    const time_diff_days_per_tick = time_diff_days / num_tick_marks

    let prev_month = -1
    for (let i = 0; i < num_tick_marks; i++) {
        const date_obj = new Date(start_date_obj.getTime() + (time_diff_days_per_tick * i * 1000 * 3600 * 24))
        dates_interpolated.push(date_obj.toISOString().split('T')[0])
    }

    return dates_interpolated

}

export function getEODEquidistant(ticker, start, end, points) {

    let dates = interpolate_dates(start, end, points)
    console.log(dates)
    let uri = `https://web.api.six-group.com/api/findata/v1/listings/marketData/eodTimeseries?scheme=TICKER_BC&ids=${ticker}&from=${start}&to=${end}`
    return query_six(uri).then(data => {

        let formatted = []
        let first = null;
        data.data?.listings[0].marketData.eodTimeseries.forEach(v => {
            if(dates.includes(v.sessionDate) && v.close) {

                formatted.push({
                    date: v.sessionDate,
                    stock: ticker,
                    price: v.close,
                    normalized: first === null ? 1 : v.close / first
                })

                if(first == null)
                    first = v.close;
            }
        })

        return formatted;

    })

}