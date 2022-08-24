import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const DeleteCircle = (props: SvgProps) => (
	<Svg width={65} height={65} fill="none" {...props}>
		<Rect x={4} y={6} width={56} height={56} rx={28} fill="#C20114" />
		<G clipPath="url(#a)" stroke="#160042" strokeWidth={1.5} strokeLinecap="round">
			<Path d="M19.635 21.667V48.78a2 2 0 0 0 2 2h21.73a2 2 0 0 0 2-2V21.667m-31.146 0H50.78" />
			<Path d="M24.375 14.219h16.25" strokeLinejoin="round" />
			<Path d="M28.438 31.146v10.156M36.563 31.146v10.156" />
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 0h65v65H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default DeleteCircle;
