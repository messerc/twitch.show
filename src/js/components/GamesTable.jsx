import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameStats from './GameStats.jsx';

export default class GamesTable extends React.Component {

	render() {
		const gameArray = this.props.games.top;
		const gamesToRender = gameArray.map( (data, i) => 
			<GameStats key={i} 
					   game={data.game.name} 
					   viewers={data.viewers} 
					   streamers={data.channels} 
					   summary={this.props.summary}
					   logo={data.game.box.medium}
					   historic={this.props.historicGame}
					   />
			);

		return (
			<div className="container-fluid col-md-8 gamestable">
				<table className="table table-hover">
					<thead>
					<tr>
						<th></th>
						<th style={{width: "200px", textAlign: "left"}}>Game</th>
						<th>Viewers</th>
						<th style={{textAlign: "left"}}>% of twitch</th>
						<th>Streamers</th>
						<th>% of twitch</th>
					</tr>
					</thead>
					<tbody>
						{gamesToRender}
					</tbody>
				</table>
			</div>
			)
	}
} 