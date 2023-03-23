import {Share} from "react-bootstrap-icons";

export default function EndScreen() {
    return (
        <div
            // className="pt-16"
        >
            <div
                className="flex flex-col justify-center items-center h-screen"
            >
                <div>
                    <h1
                        className="text-2xl font-bold"
                    >Game Over</h1>
                    <p>Thanks for playing!</p>
                </div>

                <div
                    className="flex my-24 space-x-4 w-1/2"
                >
                    <div
                        className="flex-grow"
                    >
                        <div>
                            Score
                        </div>
                        <div
                            className="font-bold text-3xl"
                        >
                            694
                        </div>
                    </div>
                    <div
                    >
                        <div>
                            Share
                        </div>
                        <div
                            className="font-bold text-3xl"
                        >
                            <button>
                                <Share/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}