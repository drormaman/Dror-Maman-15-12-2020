import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import {
	StyledactiveStyles,
	StyledLinksDiv,
	StyledNavBarHeader,
	StyledNavBarLink
} from "./styled/StyledNavBarComopnents";

export const NavBar: React.FC = () => {
	return (
		<AppBar>
			<Toolbar>
				<StyledNavBarHeader variant="h6">
					<StyledNavBarLink to="/">Ship4U</StyledNavBarLink>
				</StyledNavBarHeader>
				<StyledLinksDiv>
					<StyledNavBarLink activeStyle={StyledactiveStyles} to="/list">
						<Typography variant="subtitle1">{"My Orders"}</Typography>
					</StyledNavBarLink>
					<StyledNavBarLink activeStyle={StyledactiveStyles} to="/received">
						<Typography variant="subtitle1">{"Recieved Items"}</Typography>
					</StyledNavBarLink>
				</StyledLinksDiv>
			</Toolbar>
		</AppBar>
	);
};
