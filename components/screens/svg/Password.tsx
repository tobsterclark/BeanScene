import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Password = (props: SvgProps) => (
	<Svg width={41} height={41} fill="none" {...props}>
		<Path d="M11 30V19a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2Z" stroke="#1B1C22" strokeWidth={1.5} />
		<Path d="M25 14a5 5 0 1 0-10 0" stroke="#1B1C22" strokeWidth={1.5} strokeLinecap="round" />
		<Path
			d="M18 24.5c.32.32.5.754.5 1.207V26.537c0 .304.071.605.207.878l.093.185a1.341 1.341 0 0 0 1.8.6c.26-.13.47-.34.6-.6l.093-.185c.136-.273.207-.574.207-.878v-.83c0-.453.18-.887.5-1.207M18 24.5l-.146-.146a1.207 1.207 0 0 1-.354-.854V23c0-.329.077-.653.224-.947l.118-.237a2.179 2.179 0 0 1 .974-.974l.237-.118a2.119 2.119 0 0 1 1.894 0l.237.118a2.179 2.179 0 0 1 .974.974l.098.197c.16.32.244.673.244 1.031v.249c0 .453-.18.887-.5 1.207"
			stroke="#000"
		/>
	</Svg>
);

export default Password;
