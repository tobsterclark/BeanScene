import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowLeft = (props: SvgProps) => (
	<Svg width={48} height={48} viewBox="0 0 24 24" fill="none" {...props}>
		<Path d="M7 12h10M11 8l-4 4 4 4" stroke={props.stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default ArrowLeft;
