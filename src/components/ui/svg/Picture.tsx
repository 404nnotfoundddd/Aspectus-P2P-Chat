import Svg, { Path } from 'react-native-svg'

const Picture = ({ width, height }: Props) => {
    return (
        <Svg width={width} height={height} fill="none">
            <Path
                fill="#fff"
                fillRule="evenodd"
                stroke="#fff"
                strokeWidth="33.333"
                d="M66.666 166.667c0-55.229 44.772-100 100.001-100h466.666c55.23 0 100 44.771 100 100v466.666c0 55.23-44.77 100-100 100H166.667c-55.229 0-100-44.77-100-100V166.667ZM250 333.333c46.023 0 83.333-37.309 83.333-83.333s-37.31-83.333-83.333-83.333c-46.024 0-83.333 37.309-83.333 83.333s37.309 83.333 83.333 83.333ZM341 433.5l75.667 83.167L604.88 328.452c10.5-10.5 28.453-3.064 28.453 11.785v293.096H98l27.5-31.833 180-171c16.5-12.5 31-2 35.5 3Z"
                clipRule="evenodd"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
}

export default Picture