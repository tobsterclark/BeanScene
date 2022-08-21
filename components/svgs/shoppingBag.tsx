import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ShoppingBag = (props: SvgProps) => (
	<Svg width={58} height={58} fill="none" viewBox="0 0 58 58" {...props}>
		<Path d="M12.688 43.313v-17.75a2 2 0 0 1 2-2h28.624a2 2 0 0 1 2 2v17.75a2 2 0 0 1-2 2H14.689a2 2 0 0 1-2-2Z" stroke={props.stroke} strokeWidth={2} />
		<Path d="M20.542 28.194v-7.048a8.46 8.46 0 0 1 16.916 0v7.048" stroke={props.stroke} strokeWidth={2} strokeLinecap="round" />
	</Svg>
);

export default ShoppingBag;
