import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import GamesTable from './components/GamesTable.jsx';
import ChannelTable from './components/ChannelTable.jsx';


export default class MainLayout extends React.Component {
	constructor(props) {
	super(props);

	this.state = {summary: null, games: null, channels: null};

	//rip the ajax calls to set initial state

	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/summary',
		headers: {
			'Client-ID': 'pj2b42m1aep7izzdkwq9tiefgdao63u'
		},
		success: (data) => this.setState({summary: data})
		});

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
	}


	render() {
		if(this.state.summary && this.state.games && this.state.channels) {
			console.log(this.state.channels);
		return (
			<div className="container-fluid">
				<Header summary={this.state.summary} />
					<div className="row">
						<div className="col-md-3">
						</div>

						<GamesTable games={this.state.games} summary={this.state.summary} />
						<ChannelTable channels={this.state.channels} summary={this.state.summary} />

						<div className="col-md-3">
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

ReactDOM.render(
	<MainLayout />,
	document.getElementById("app")
	)
