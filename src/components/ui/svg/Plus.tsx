import Svg, { Path } from 'react-native-svg'

const Plus = ({ width, height, fill }: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path
                fill={fill ?? '#fff'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-13a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
    fill?: string
}

export default Plus