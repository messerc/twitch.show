import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import GamesChart from './GamesChart.jsx';


export default class GameView extends React.Component {
	constructor(props) {
		super(props);


		this.state = { game: null, gamesummary: null }

		
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
		
			};


	componentDidMount() {
		for (let i=0; i < this.props.games.top.length; i++) {
			if (this.props.games.top[i].game.name === this.props.params.gamename) {
				this.setState({
					gamesummary: this.props.games.top[i]
				})
			}
		}
	}


	render() {
		if (this.state.game && this.state.gamesummary) {
			return (
		<div className="container col-md-8">
			<table className="table gamestat" style={{marginTop: "50px"}}>
				<tbody>
					<tr>
						<td style={{textAlign: "right"}}>
						<img src={this.state.gamesummary.game.box.medium}  />
						</td>
						<td>
						<h5><strong>{this.state.gamesummary.game.name}</strong></h5>
						<h5>{this.state.gamesummary.viewers.toLocaleString()} <span className="text-muted">viewers</span></h5>
						<h5>{this.state.gamesummary.channels.toLocaleString()} <span className="text-muted">streamers</span></h5>
						</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
				<GamesChart data={this.state.game} summary={this.state.gamesummary} />
			</div>
				)
		} 
			return (
			<div></div>
			)
			
		}
	}
