import { Paper, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledModal = styled(Paper)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 350px;
	outline: none;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormInput = styled(TextField)`
	width: 100%;
`;
export const Form = styled.form`
	width: 70%;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const InputWrapper = styled.div`
	height: 60px;
	width: 100%;
	margin-bottom: 18px;
`;
