import {Share} from "react-bootstrap-icons";
import Image from "next/image";

export default function Test() {

    return (
        <div
            className="flex flex-col h-[80vh] w-screen pt-20 items-center justify-center"
        >


            <Image src="/sixlearn.png" className={"mb-5"} alt="logo" width="150" height="86" style={{marginLeft: "-10px"}}/>

            <div
                className="flex flex-col items-center"
            >
                <p
                    className="text-sm text-gray-500 w-3/4 text-center"
                >
                    Surprisingly, Apple performed badly over this time frame.
                    Some lucky investors gained a lot from Microsoft.
                    A balanced investor might have achieved earnings of 12%,
                    performing much better than those who only bough Apple stock
                </p>
                <h3
                    className="text-2xl my-3"
                >Performance</h3>
                <div
                    className="flex space-x-5 mt-5"
                >
                    <div
                        className="
                            flex flex-col items-center
                        "
                    >
                        <h3
                            className="text-xl"
                        >Total</h3>
                        <div
                            className="my-5 text-green-500 font-bold"
                        >
                            +154 CHF
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center"
                    >
                        <h3
                            className="text-xl"
                        >Relative</h3>
                        <div
                            className="my-5 text-green-500 font-bold"
                        >+20%
                        </div>
                    </div>
                </div>
                <p
                    className="text-sm text-gray-500"
                >
                    This puts you in the top 10% of all investors.
                </p>
                <div
                    className="mt-10"
                >
                    <button
                        className="bg-blue-500 text-white px-5 py-2 rounded-md"
                    >
                        Share <Share className="inline-block ml-2"/>
                    </button>
                </div>
            </div>

        </div>
    )
}