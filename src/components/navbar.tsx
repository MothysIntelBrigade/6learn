import Image from 'next/image'
import {BarChartLine, GearFill} from "react-bootstrap-icons";

export default function Navbar() {
    return (
        <div className="flex w-full fixed justify-between p-2 items-center h-16 bg-slate-100">
            <div>
                <Image src="/logo.png" alt="logo" width="64" height="64" />
            </div>
            <div
                className="mr-2 flex justify-between items-center space-x-5"
            >
                <button
                    className="text-gray-600"
                >
                    <BarChartLine className="h-10"/>
                </button>
                <button
                    className="text-gray-600"
                >
                    <GearFill className="h-10"/>
                </button>
            </div>
        </div>
    )
}