import { Typography } from "@material-ui/core";
import React from "react";
import { StyledEmptyDiv } from "./styled/StyledListComponents";

export const EmptyListMessage: React.FC = () => {
	return (
		<StyledEmptyDiv>
			<Typography variant="h5">No Items To Show</Typography>
		</StyledEmptyDiv>
	);
};
