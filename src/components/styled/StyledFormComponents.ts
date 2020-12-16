import { TextField } from "@material-ui/core";
import styled from "styled-components";

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
