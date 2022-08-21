import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const Timer = (props: SvgProps) => (
	<Svg width={58} height={58} fill="none" viewBox="0 0 58 58" {...props}>
		<Circle cx={29} cy={32.021} r={14.5} stroke={props.stroke} strokeWidth={1.5} />
		<Path d="M34.438 11.625a.75.75 0 0 0 0-1.5v1.5Zm-10.876-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10.875 0H23.563v1.5h10.875v-1.5ZM28.25 30.813a.75.75 0 1 0 1.5 0h-1.5Zm1.5-6.042a.75.75 0 0 0-1.5 0h1.5Zm0 6.041v-6.041h-1.5v6.041h1.5Z" fill={props.stroke} />
	</Svg>
);

export default Timer;
