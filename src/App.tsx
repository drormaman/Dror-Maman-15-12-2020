import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemsListPage } from "./pages/ItemsListPage";
import { ReceivedItemsPage } from "./pages/ReceivedItemsPage";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/" component={() => <div>homepage</div>} />
				<Route exact path="/list" component={ItemsListPage} />
				<Route exact path="/received" component={ReceivedItemsPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
