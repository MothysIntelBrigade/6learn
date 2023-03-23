export default function GraphUpArrow(props: GraphUpArrowProps) {
    return (
        <div
            className={`grid place-items-center`}
        >
            <svg
                width={"80%"}
                height={"80%"}
                preserveAspectRatio={"none"}
                viewBox={"0 0 70 70"}
                fill={"none"}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path
                    fillRule={"evenodd"}
                    clipRule={"evenodd"}
                    d={
                        "M 0 0 H 4.375 V 65.625 H 70 V 70 H 0 V 0 Z M 43.75 15.313 C 43.75 14.104 44.729 13.125 45.938 13.125 H 63.438 C 64.646 13.125 65.625 14.104 65.625 15.313 V 32.813 C 65.625 34.021 64.646 35 63.438 35 C 62.229 35 61.25 34.021 61.25 32.813 V 21.441 L 45.443 40.76 C 45.052 41.239 44.476 41.529 43.859 41.56 C 43.242 41.591 42.64 41.359 42.203 40.922 L 30.888 29.607 L 14.894 51.599 C 14.184 52.576 12.815 52.792 11.838 52.082 C 10.861 51.371 10.645 50.003 11.356 49.026 L 28.856 24.963 C 29.232 24.446 29.816 24.119 30.454 24.069 C 31.092 24.019 31.719 24.251 32.172 24.703 L 43.588 36.119 L 58.821 17.5 H 45.938 C 44.729 17.5 43.75 16.521 43.75 15.313 Z"
                    }
                    fill={"black"}
                ></path>
            </svg>
        </div>
    );
}

GraphUpArrow.defaultProps = {};

interface GraphUpArrowProps {
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
