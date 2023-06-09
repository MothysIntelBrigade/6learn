import Head from 'next/head'
import Link from "next/link";
import Trophy from "/public/assets/Trophy";
import GraphUpArrow from "/public/assets/GraphUpArrow";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>6learn</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"grid place-items-center"}>
                <Link href="/play">
                    <button
                        className="grid place-items-center fixed mt-5 p-1 top-[20%] bottom-[40%] left-[55%] right-[11%] bg-white rounded-md border border-gray-500 shadow-lg">
                        <GraphUpArrow/>
                        <p className={" text-3xl italic text-black m-0 h-[52px]  leading-[normal]"}> {"Learn"} </p>
                    </button>
                </Link>
                <button
                    className="grid place-items-center fixed mt-5 p-1 top-[20%] bottom-[40%] left-[11%] right-[55%] bg-white rounded-md border border-gray-500 shadow-lg">
                    <Trophy/>
                    <p className={" text-3xl italic text-black m-0 h-[52px] leading-[normal]"}> {"Daily"} </p>
                </button>

                <div className={"absolute top-2/3 grid place-items-center"}>
                    <p className={"text-3xl italic top-[66%] text-[rgba(208,57,38,1)]"}>{"powered by"} </p>
                    <br/><br/>
                    <Image src="/logo.png" alt="logo" width="86" height="86"/>
                </div>
            </div>
        </>
    )
}
