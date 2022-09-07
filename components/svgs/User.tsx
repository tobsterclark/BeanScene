import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const User = (props: SvgProps) => (
	<Svg width={41} height={41} fill="none" viewBox="0 0 41 41" {...props}>
		<Path
			d="M16.658 15.248a3.844 3.844 0 1 0 7.685.254 3.844 3.844 0 0 0-7.685-.254ZM28.188 29.469a8.305 8.305 0 0 0-3.065-3.726 8.334 8.334 0 0 0-9.246 0 8.306 8.306 0 0 0-3.065 3.726"
			stroke={props.stroke ?? "#1B1C22"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default User;
