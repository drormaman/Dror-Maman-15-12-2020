import React from "react";
import {
	StyledH1,
	StyledHomePage
} from "../components/styled/StyledHomePageComponents";

export const HomePage: React.FC = () => {
	return (
		<StyledHomePage>
			<StyledH1 variant="h1" color="textSecondary">
				<span style={{ fontWeight: 500 }}>Ship4U</span> - Your next shipping
				tracker
			</StyledH1>
		</StyledHomePage>
	);
};
