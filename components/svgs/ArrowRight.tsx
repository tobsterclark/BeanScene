import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowRight = (props: SvgProps) => (
	<Svg width={24} height={24} fill="none" {...props}>
		<Path d="M17 12H7M13 8l4 4-4 4" stroke="#160042" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default ArrowRight;
