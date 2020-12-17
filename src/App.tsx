import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { MyOrdersPage } from "./pages/MyOrdersPage";
import { ReceivedItemsPage } from "./pages/ReceivedItemsPage";

const Main = styled.main`
	padding-top: 64px;
	@media (max-width: 650px) {
		padding-top: 56px;
	}
`;

function App() {
	return (
		<HashRouter>
			<NavBar />
			<Main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/list" component={MyOrdersPage} />
					<Route exact path="/received" component={ReceivedItemsPage} />
				</Switch>
			</Main>
		</HashRouter>
	);
}

export default App;
