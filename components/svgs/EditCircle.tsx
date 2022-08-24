import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const EditCircle = (props: SvgProps) => (
	<Svg width={65} height={65} fill="none" {...props}>
		<Rect x={4} y={5} width={56} height={56} rx={28} fill="#FF9472" />
		<Path d="M18.281 46.719H46.72M18.281 38.594v-8.125l18.605-17.277a.5.5 0 0 1 .694.013l6.09 6.09a.5.5 0 0 1 .013.693L26.406 38.594h-8.125Z" stroke="#160042" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default EditCircle;
