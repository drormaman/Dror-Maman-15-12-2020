import { AppBar, Paper, Tab } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Paper)`
	max-width: 600px;
	width: 100%;
	margin: 50px auto;
	position: relative;
`;

export const StyledListContainer = styled.div`
	width: 100%;
	overflow-y: auto;
	background-color: #f5f5f5;
	max-height: 60vh;

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #bbb;
		border-radius: 4px;
	}
`;

export const StyledTab = styled(Tab)`
	flex-grow: 1;
`;

export const StyledList = styled.div`
	padding-bottom: 16px;
`;

export const StyledBottomBar = styled(AppBar)`
	padding: 8px 24px;
	top: auto;
	bottom: 0;
`;
export const StyledEmptyDiv = styled.div`
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 30px;
`;
