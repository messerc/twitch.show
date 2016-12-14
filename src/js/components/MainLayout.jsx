import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

import Header from './Header.jsx';
import GamesTable from './GamesTable.jsx';
import ChannelTable from './ChannelTable.jsx';
import GameView from './GameView.jsx';
import MainLineChart from './MainLineChart.jsx';

var historicSummaryData = [];
var historicGameData = [];


export default class MainLayout extends React.Component {
	constructor(props) {
	super(props);

	this.state = {summary: null, games: null, channels: null, historicSummary: null, historicGame: null};
	this.pushHistoricGameData = this.pushHistoricGameData.bind(this);
	this.pushHistoricSummaryData = this.pushHistoricSummaryData.bind(this);
	this.getSummaryData = this.getSummaryData.bind(this);
	this.getGameData = this.getGameData.bind(this);
	//rip the ajax calls to set initial state


	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams?limit=20',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({channels: data})
		});
	}

	componentDidMount() {
		this.getSummaryData();
		this.getGameData();
		setInterval(this.getGameData, 5000);
		setInterval(this.getSummaryData, 5000);
		setInterval(this.pushHistoricSummaryData, 5000);
		setInterval(this.pushHistoricGameData, 5000);
	}


	getGameData() {
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/games/top?limit=20',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({games: data})
		});
	}

	getSummaryData() {
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/summary',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({summary: data})
		});
	}

	pushHistoricGameData() {
		historicGameData.push(this.state.games);
		this.setState({
			historicGame: historicGameData
		})
	}

	pushHistoricSummaryData() {
		historicSummaryData.push(this.state.summary);
		this.setState({
			historicSummary: historicSummaryData
		})
	}

	render() {
		if(this.state.summary && this.state.games && this.state.channels) {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 col-md-offset-2">
						<Header summary={this.state.summary} />
					</div>
					<div className="col-md-6">
						<MainLineChart data={this.state.historicSummary} />
					</div>
					<div className="col-md-2">
					</div>
				</div>
					<div className="custom-navbar">
						<ul className="selector">
							<Link to="/"><li className="selector">Games</li></Link>
	  						<Link to="streamers"><li className="selector">Streamers</li></Link>
	  					</ul>
  					</div>
					<div className="row">
						<div className="col-md-2">
						</div>

						{React.cloneElement(this.props.children, { games: this.state.games, summary: this.state.summary, channels: this.state.channels, historicGame: this.state.historicGame })}

						<div className="col-md-2">
						</div>
					</div>
			</div>
			)
		}
		return (
			<div></div>
			)
	}
}


/*

<GamesTable games={this.state.games} summary={this.state.summary} />

<ChannelTable channels={this.state.channels} summary={this.state.summary} />

*/ 