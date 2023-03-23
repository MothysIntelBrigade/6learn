import Image from 'next/image'
import {GearFill} from "react-bootstrap-icons";

export default function Navbar() {
    return (
        <div className="flex w-full fixed justify-between p-2 items-center">
            <div>
                <Image src="/logo.png" alt="logo" width="64" height="64" />
            </div>
            <div>
                <button
                    className="text-gray-700 text-lg"
                >
                    <GearFill/>
                </button>
            </div>
        </div>
    )
}