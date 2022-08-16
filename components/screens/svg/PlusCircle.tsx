import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const PlusCircle = (props: SvgProps) => (
	<Svg width={65} height={65} fill="none" {...props}>
		<Rect x={4} y={5} width={56} height={56} rx={28} fill="#FF9472" />
		<Path d="M41.98 33.25a.75.75 0 1 0 0-1.5v1.5Zm-18.96-1.5a.75.75 0 0 0 0 1.5v-1.5Zm18.96 0H23.02v1.5h18.96v-1.5Z" fill="#160042" />
		<Path d="M31.75 41.98a.75.75 0 1 0 1.5 0h-1.5Zm1.5-18.96a.75.75 0 0 0-1.5 0h1.5Zm0 18.96V23.02h-1.5v18.96h1.5Z" fill="#160042" />
	</Svg>
);

export default PlusCircle;
