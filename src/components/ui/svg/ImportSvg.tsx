import Svg, { Path } from 'react-native-svg'

const ImportSvg = ({ width, height }: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M14 9a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3h10v-3a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 1 1v4.586l1.293-1.293a1 1 0 1 1 1.414 1.414L8 10.414 4.293 6.707a1 1 0 0 1 1.414-1.414L7 6.586V2a1 1 0 0 1 1-1Z"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
}

export default ImportSvg