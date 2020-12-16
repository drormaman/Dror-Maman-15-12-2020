import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { ItemsListPage } from "./pages/ItemsListPage";
import { ReceivedItemsPage } from "./pages/ReceivedItemsPage";

const Main = styled.main`
	padding-top: 64px;
`;

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Main>
				<Switch>
					<Route exact path="/" component={() => <div>homepage</div>} />
					<Route exact path="/list" component={ItemsListPage} />
					<Route exact path="/received" component={ReceivedItemsPage} />
				</Switch>
			</Main>
		</BrowserRouter>
	);
}

export default App;
