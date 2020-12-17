import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const StyledHomePage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 75vh;
`;

export const StyledH1 = styled(Typography)`
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	font-weight: 300;
	text-align: center;

	@media (max-width: 650px) {
		font-size: 5em;
		padding: 0 36px 18px;
		text-align: left;
	}
	@media (max-width: 450px) {
		font-size: 3em;
		padding: 0 24px 18px;
		text-align: left;
	}
`;
