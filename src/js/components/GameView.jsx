import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import GamesChart from './GamesChart.jsx';


export default class GameView extends React.Component {
	constructor(props) {
		super(props);


		this.getGameData = this.getGameData.bind(this);	
		this.getGameSummaryData = this.getGameSummaryData.bind(this);
		this.state = { game: null, gamesummary: null };	
		};


	componentDidMount() {
		this.getGameData();
		this.getGameSummaryData();
		this.gameTimerId = setInterval(this.getGameData, 5000);
		this.summaryTimerId = setInterval(this.getGameSummaryData, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.gameTimerId);
		clearInterval(this.summaryTimerId);
	}


	getGameData() {
		$.ajax({
		type: 'GET',
		url: `https://api.twitch.tv/kraken/streams?limit=20&game=${ this.props.params.gamename }`,
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => {
			console.log(data);
			let gameStreamers = [];
			for (let i=0; i < data["streams"].length; i++) {
				gameStreamers.push({
					game: data["streams"][i].game,
					streamer: data["streams"][i]["channel"].display_name,
					viewers: data["streams"][i].viewers,
					title: data["streams"][i]["channel"].status,
					banner: data["streams"][i]["channel"].logo,
					url: data["streams"][i]["channel"].url
				});
			}
			this.setState({
				game: gameStreamers
			})
		}
		})	
	}

	getGameSummaryData() {
		for (let i=0; i < this.props.games.top.length; i++) {
		if (this.props.games.top[i].game.name === this.props.params.gamename) {
			this.setState({
				gamesummary: this.props.games.top[i]
			})
			}
		};
	}


	render() {
		if (this.state.game && this.state.gamesummary) {
			const { summary } = this.props;
			const percentageofTotalViewers = Math.round(((this.state.gamesummary.viewers / summary.viewers) * 100) * 10) / 10; 
			const percentageofTotalStreamers = Math.round((this.state.gamesummary.channels / summary.channels) * 100);
			return (
		<div className="container col-md-8">
			<h2>{this.state.gamesummary.game.name}</h2>
			<h5>{this.state.gamesummary.viewers.toLocaleString()} <span className="text-muted">viewers  |  </span> {percentageofTotalViewers}% <span className="text-muted">of twitch</span> </h5>
			<h5>{this.state.gamesummary.channels.toLocaleString()} <span className="text-muted">streamers  |  </span> {percentageofTotalStreamers}% <span className="text-muted">of twitch</span></h5>
				<GamesChart data={this.state.game} summary={this.state.gamesummary} />
			</div>
				)
		} 
			return (
			<div></div>
			)
			
		}
	}


// <img src={this.state.gamesummary.game.box.medium}  />