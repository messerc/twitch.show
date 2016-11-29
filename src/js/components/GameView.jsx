import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


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
			success: (data) => this.setState({
				game: data.streams
			})
		
			});
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
		console.log(this.state.game);
		console.log(this.state.gamesummary);
			return (
				<div className="container-fluid col-md-6 gamestable">
					<ResponsiveContainer height={600}>
					  <BarChart data={this.state.game}
					            margin={{top: 5, right: 30, left: 5, bottom: 5}}
					            layout="vertical">
					    <XAxis dataKey="viewers" type="number" axisLine={false} tickLine={false} tick={false} />
					    <YAxis type="category" dataKey="game" tickLine={false} tick={{fill: 'rgb(255, 255, 255)'}} />
					    <Tooltip wrapperStyle={{background: '#333'}} itemStyle={{background: '#333'}} labelStyle={{background: '#333'}} cursor={{fill: '#333'}}/>
					    <Bar dataKey="viewers" fill="black" />
					  </BarChart>
					</ResponsiveContainer>
				</div>
				)
			}	
		else {
			return (
			<div></div>
			)
		}
	}
}
