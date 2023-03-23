export function Timeline() {

    const start_date = "2020-01-01"
    const end_date = "2020-05-30"

    const num_tick_marks = 30

    function interpolate_dates(start_date: string, end_date: string, num_tick_marks: number): string[] {
        let dates_interpolated: string[] = []

        const start_date_obj = new Date(start_date)
        const end_date_obj = new Date(end_date)
        const time_diff = end_date_obj.getTime() - start_date_obj.getTime()
        const time_diff_days = time_diff / (1000 * 3600 * 24)
        const time_diff_days_per_tick = time_diff_days / num_tick_marks

        let prev_month = -1
        for (let i = 0; i < num_tick_marks; i++) {
            const date_obj = new Date(start_date_obj.getTime() + (time_diff_days_per_tick * i * 1000 * 3600 * 24))

            // Date string:
            // First day of month includes month (number) other days just day
            let date_str = ""
            if (date_obj.getMonth() != prev_month) {
                date_str = `${date_obj.getDate()}.${date_obj.getMonth() + 1}.${date_obj.getFullYear()}`
                prev_month = date_obj.getMonth()
            } else {
                date_str = `${date_obj.getDate()}.`
            }

            dates_interpolated.push(date_str)
        }

        return dates_interpolated

    }

    const dates_interpolated = interpolate_dates(start_date, end_date, num_tick_marks)

    return (
        <div
        className="w-full"
        >
            <div
            className="border-b border-gray-400 text-gray-300 text-xs"
            >

                <div
                    className="flex justify-between items-center"
                    >
                    {/*<div>*/}
                    {/*    {start_date}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    {end_date}*/}
                    {/*</div>*/}
                </div>
                <div
                    className="flex justify-between items-center w-full"
                >
                    {dates_interpolated.map((date, i) => {
                        return (
                            <div
                                key={i}
                            >{date}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}