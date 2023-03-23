import {useEffect, useState} from "react";
import styles from "./temp.module.css";
import {svgPathMaker} from "@/utils/data_to_svg/data_to_svg";


export default function Temp() {
    const [path, setPath] = useState("")

    // svgPathMaker("GOOG_67", "2023-01-10", "2023-01-30", 1000, 300).then(res => {
    //     setPath(res)
    // })

    useEffect(() => {

    }, []);

    return (
        <div className="flex h-screen w-screen pt-20">
            <div
                className="grid grid-cols-2 gap-0"
            >
                <div
                    className="overflow-x-hidden"
                >

                    <svg viewBox="0 0 1000 300"
                         className={`w-[1000px] ${styles.graph}`}
                    >
                        <g>

                        <g transform="matrix(-1,0,0,1,2950,45)">
                            <path d="M34,255L2950,255" className="fill-none stroke-black stroke-width-1.5px "/>
                        </g>
                        <g transform="matrix(-1,0,0,1,2950,-105)">
                            <path d="M34,255L2950,255"

                                  className="fill-none stroke-gray-500 stroke-width-1px "
                            />
                        </g>
                        <g transform="matrix(1,0,0,1,2885,13)">
                            <path d="M31,287L31,278" className="fill-none stroke-black stroke-width-1.5px "/>
                        </g>
                        <g transform="matrix(1,0,0,1,-31,13)">
                            <path d="M31,287L31,278" className="fill-none stroke-black stroke-width-1.5px "/>
                        </g>
                        <g transform="matrix(1,0,0,1,0,-13)">
                            <text x="2px" y="294.745px"

                                  className="text-lg"
                            >2018
                            </text>
                        </g>
                        <path d="M31,287L31,278" className="fill-none stroke-black stroke-width-1.5px "/>

                        <path
                            className={styles.path}
                            fill="none"
                            stroke="rgb(239 68 68)"
                            strokeWidth="3"
                            d="M 0 300 L 0 300 L 19 254 L 38 259 L 58 245 L 96 255 L 115 261 L 135 228 L 154 146 L 173 116 L 192 147 L 212 185 L 231 148 L 250 124 L 269 166 L 288 137 L 308 113 L 327 0 L 346 55 L 365 82 L 385 12 L 404 135 L 423 205 L 442 214 L 462 212 L 481 212 L 500 179 L 519 200 L 538 218 L 577 257 L 596 261 L 615 272 L 635 298 L 654 287 L 673 284 L 692 281 L 712 253 L 731 227 L 750 203 L 769 224 L 788 217 L 808 248 L 827 273 L 846 263 L 865 223 L 885 188 L 904 119 L 923 97 L 942 105 L 962 45 L 981 70 "
                        />

                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                values="360;-640"
                                dur="5s"
                            />
                        </g>
                    </svg>
                </div>
                {/*<div*/}
                {/*    className="bg-white h-screen absolut"*/}
                {/*>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}