import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

import Header from './Header.jsx';
import GamesTable from './GamesTable.jsx';
import ChannelTable from './ChannelTable.jsx';
import GameView from './GameView.jsx';




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
			console.log(this.state.game);
		return (
			<div className="container-fluid">
				<Header summary={this.state.summary} />
					<div className="custom-navbar">
						<ul className="selector">
							<Link to="/"><li className="selector">Games</li></Link>
	  						<Link to="streamers"><li className="selector">Streamers</li></Link>
	  					</ul>
  					</div>
					<div className="row">
						<div className="col-md-2">
						</div>

						{React.cloneElement(this.props.children, { games: this.state.games, summary: this.state.summary, channels: this.state.channels })}

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