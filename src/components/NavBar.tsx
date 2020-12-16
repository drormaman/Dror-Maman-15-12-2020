import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavBarProps {}

const NavBarHeader = styled(Typography)`
	margin-right: auto;
`;

const NavBarLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	flex-grow: 1;
	padding-left: 12px;
	&:visited {
		color: white;
	}
`;

const LinksDiv = styled.div`
	display: flex;
`;

export const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<AppBar>
			<Toolbar>
				<NavBarHeader variant="h6">
					<NavBarLink to="/">Ship4U</NavBarLink>
				</NavBarHeader>
				<LinksDiv>
					<NavBarLink to="/list">
						<Typography variant="subtitle1">{"My Orders"}</Typography>
					</NavBarLink>
					<NavBarLink to="/received">
						<Typography variant="subtitle1">{"Recieved Items"}</Typography>
					</NavBarLink>
				</LinksDiv>
			</Toolbar>
		</AppBar>
	);
};
