import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

const StatusCircle = (props: SvgProps) => (
	<Svg width={56} height={56} fill="#FF9472" {...props}>
		<Rect width={56} height={56} rx={28} />
	</Svg>
);

export default StatusCircle;
