import StockCard from "@/components/stock_card";
import {useState} from "react";

export function StockView(){
    const [budget, setBudget] = useState(10000)

    return(
        <div
            className="mx-2"
        >
            <div className="text-sm mb-1">Budget: {budget/100}$</div>
            <div
                className="space-y-2 mb-2"
            >
                <StockCard ticker={"APPL"} stock_price={2445} budget={budget} setBudget={setBudget} info_text="Hi"/>
                <StockCard ticker={"AMZN"} stock_price={3445} budget={budget} setBudget={setBudget} info_text="Ho"/>
                <StockCard ticker={"TSLA"} stock_price={4445} budget={budget} setBudget={setBudget} info_text="He"/>
            </div>

        </div>
    )
}