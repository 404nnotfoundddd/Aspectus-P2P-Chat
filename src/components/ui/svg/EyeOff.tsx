import Svg, { Path } from 'react-native-svg'

const EyeOff = ({ width, height }: Props) => {
    return (
        <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m3 3 18 18"
            />
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z"
                clipRule="evenodd"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
}

export default EyeOff