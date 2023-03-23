import {svgPathMaker} from "@/utils/data_to_svg/data_to_svg";
import {useState} from "react";

function Settings() {

    const [path, setPath] = useState("")


    svgPathMaker("GOOG_67", "2023-01-10", "2023-01-30", 500, 500).then(res => {
        setPath(res)
    })
    console.log(path)
    return (

        <svg className={"absolute top-1/2"} width="500" height="500" xmlns="http://www.w3.org/2000/svg">

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