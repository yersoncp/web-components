type ReactComponentProps = {
    width?: number
    heigth?: number
}

const ReactComponent = ({ width = 24, heigth = 24 }: ReactComponentProps) => {
    return <>
        <svg width={width} height={heigth} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -6599.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <polygon id="arrow_right_up-[#354]" points="324 6457.602 325.393 6458.997 342 6442.349 342 6453 344 6453 344 6439 329.907 6439 329.877 6441 340.634 6441">
                        </polygon>
                    </g>
                </g>
            </g>
        </svg>
    </>
}

export default ReactComponent;
