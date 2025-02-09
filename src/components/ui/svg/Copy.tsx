import Svg, { G, Path } from 'react-native-svg'

const Copy = ({ width, height, fill = '#fff' }: Props) => {
    return (
        <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
            <G fill={fill}>
                <Path d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z" />
                <Path d="M17.1 2h-4.2C9.817 2 8.37 3.094 8.07 5.739c-.064.553.395 1.011.952 1.011H11.1c4.2 0 6.15 1.95 6.15 6.15v2.078c0 .557.457 1.015 1.01.952C20.907 15.63 22 14.183 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" />
            </G>
        </Svg>
    )
}

type Props = {
    width: number
    height: number
    fill?: string
}

export default Copy