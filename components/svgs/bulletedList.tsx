import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BulletedList = (props: SvgProps) => (
	<Svg width={58} height={58} fill="none" viewBox="0 0 58 58" {...props}>
		<Path d="M45.313 16.313H21.145M45.313 29H21.145M45.313 41.688H21.145" stroke="#160042" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
		<Path d="M13.292 16.313v.024M13.292 29v.024M13.292 41.688v.024" stroke="#160042" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default BulletedList;
