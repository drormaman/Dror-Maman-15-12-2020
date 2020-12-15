import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
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
	&:visited {
		color: white;
	}
`;

export const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<AppBar>
			<Toolbar>
				<NavBarHeader variant="h6">Ship4U</NavBarHeader>
				<Button>
					<NavBarLink to="/list">{"Ordered Items"}</NavBarLink>
				</Button>
				<Button>
					<NavBarLink to="/received">{"Recieved Items"}</NavBarLink>
				</Button>
			</Toolbar>
		</AppBar>
	);
};
