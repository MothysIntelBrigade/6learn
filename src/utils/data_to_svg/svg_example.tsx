import {svgPathMaker} from "@/utils/data_to_svg/data_to_svg";
import {useState} from "react";

export default function Example() {

    const [path, setPath] = useState("")

    svgPathMaker("GOOG_67", "2022-01-10", "2023-01-30", 500, 500, 4).then(res => {
        setPath(res)
    })
    console.log(path)
    return (

        <svg className={"absolute top-1/2"} width="500" height="500" xmlns="http://www.w3.org/2000/svg">

            <path d={path} fill="transparent" stroke="black"></path>
        </svg>)
}
