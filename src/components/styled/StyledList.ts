import { Paper, Tab } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Paper)`
	max-width: 600px;
	width: 100%;
	margin: 50px auto;
	height: 65%;
`;
export const StyledListContainer = styled.div`
	width: 100%;
	overflow-y: scroll;
	background-color: #f5f5f5;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}
`;

export const StyledTab = styled(Tab)`
	flex-grow: 1;
`;

export const StyledList = styled.div`
	max-height: 70vh;
`;
