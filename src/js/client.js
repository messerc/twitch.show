import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, IndexRoute, hashHistory } from "react-router"; 

import MainLayout from './components/MainLayout.jsx';
import Header from './components/Header.jsx';
import GamesTable from './components/GamesTable.jsx';
import GameView from './components/GameView.jsx';
import ChannelTable from './components/ChannelTable.jsx';
import ScatterPlot from './components/ScatterPlot.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={GamesTable}></IndexRoute>
				<Route path="streamers" name="streamers" component={ChannelTable}></Route>
				<Route path="scatter" name="scatter" component={ScatterPlot}></Route>
				<Route path="game/:gamename" name="gameview" component={GameView}></Route>
		</Route>
	</Router>, 
	document.getElementById("app")
	)
