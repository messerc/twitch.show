import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameStats from './GameStats.jsx';

export default class GamesTable extends React.Component {

	render() {
		console.log(this.props.games.top);
		const gamearray = this.props.games.top;

		const gamestorender = gamearray.map((data, i) => 
			<GameStats key={i} game={data.game.name} viewers={data.viewers} summary={this.props.summary} />
			);


		return (
			<div className="container-fluid col-md-6 gamestable">
			<h4 className="text-muted"><strong>Top Games</strong></h4>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>game</th>
							<th>viewers</th>
							<th>% of twitch</th>
						</tr>
					</thead>
					<tbody>
						{gamestorender}
					</tbody>
				</table>
			</div>
			)
	}
}