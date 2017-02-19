import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

import ChannelTable from './ChannelTable.jsx';
import GamesTable from './GamesTable.jsx';
import GameView from './GameView.jsx';
import Header from './Header.jsx';
import MainLineChart from './MainLineChart.jsx';
import NavBar from './NavBar.jsx';
import ScatterPlot from './ScatterPlot.jsx';





export default class MainLayout extends React.Component {
	constructor(props) {
	super(props);


	this.state = { summary: null, games: null, channels: null, historicSummary: [] }
	this.fetchTwitchData = this.fetchTwitchData.bind(this);
	this.pushHistoricSummaryData = this.pushHistoricSummaryData.bind(this);
	}


	componentDidMount() {
		this.fetchTwitchData();
		setInterval(this.fetchTwitchData, 5000);
		setInterval(this.pushHistoricSummaryData, 5000);
	}

	fetchTwitchData() {
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/games/top?limit=20',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({games: data})
		});
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams?limit=20',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({channels: data})
		});
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/summary',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({summary: data})
		});
	}

	pushHistoricSummaryData() {
		const date = new Date();
		if (this.state.historicSummary.length < 800) {
			this.setState({
				historicSummary: this.state.historicSummary.concat([{"viewers": this.state.summary.viewers, "date": date.toLocaleTimeString()}])
		})
		}
		else {
		let newHistoricArray = this.state.historicSummary.shift();
			this.setState({
				historicSummary: newHistoricArray.concat([{"viewers": this.state.summary.viewers, "date": date.toLocaleTimeString()}])
			})
		}
	}

	render() {
		if(this.state.summary && this.state.games && this.state.channels) {
		return (
			<div className="container-fluid">
				<div className="row">					
					<div className="col-md-2 col-md-offset-2 col-xs-6 col-xs-offset-2">
						<Header summary={this.state.summary} />
					</div>
					<div className="col-md-6 col-xs-12">
						<MainLineChart data={this.state.historicSummary} />
					</div>
					<div className="col-md-2">
					</div>
				</div>
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<NavBar />
						</div>
  					</div>
					<div className="row">
						<div className="col-md-2">
						</div>

						{React.cloneElement(this.props.children, { games: this.state.games, summary: this.state.summary, channels: this.state.channels, historicGame: this.state.historicGame })}

						<div className="col-md-2">
						</div>
					</div>
				<div id="footer">
					<a href="https://github.com/messerc/twitch.show">
					<i className="fa fa-github fa-2x icon" aria-hidden="true" />
					</a>
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