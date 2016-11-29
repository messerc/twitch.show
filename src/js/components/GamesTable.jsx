import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameStats from './GameStats.jsx';

export default class GamesTable extends React.Component {

	render() {
		console.log(this.props.games.top);
		const gameArray = this.props.games.top;

		const gamesToRender = gameArray.map( (data, i) => 
			<GameStats key={i} id={data.game._id} game={data.game.name} viewers={data.viewers} summary={this.props.summary} />
			);


		return (
			<div className="container-fluid col-md-6 gamestable">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>game</th>
							<th>viewers</th>
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