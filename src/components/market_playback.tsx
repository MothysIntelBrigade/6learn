import {LineChart, Line, XAxis} from 'recharts';

export function MarketPlayback() {

    const stocks = ["APPL", "AMZN"]
    const start_date = new Date("2021-01-01");
    const end_date = new Date("2021-01-31");
    const num_data_points = 31;
    const dates = [];


    return (
        <div>
            {/*<LineChart width={400} height={400} data=>*/}
            {/*    <Line type="monotone" dataKey="uv" stroke="#D9D9D9" strokeWidth={2} />*/}
            {/*    <XAxis dataKey="date" />*/}
            {/*</LineChart>*/}
        </div>
    )
}