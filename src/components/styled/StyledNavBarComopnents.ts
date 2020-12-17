import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBarHeader = styled(Typography)`
	margin-right: auto;
`;

export const StyledNavBarLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	flex-grow: 1;
	padding-left: 12px;
	&:visited {
		color: white;
	}
	&:hover {
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
	}
`;

export const StyledLinksDiv = styled.div`
	display: flex;
`;

export const StyledactiveStyles = {
	textShadow: "0 0 3px rgba(0, 0, 0, 0.5)"
};
