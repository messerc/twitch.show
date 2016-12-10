import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameStats from './GameStats.jsx';

export default class GamesTable extends React.Component {

	render() {
		console.log(this.props.games.top);
		const gameArray = this.props.games.top;

		const gamesToRender = gameArray.map( (data, i) => 
			<GameStats key={i} 
					   game={data.game.name} 
					   viewers={data.viewers} 
					   streamers={data.channels} 
					   summary={this.props.summary}
					   logo={data.game.box.medium}
					   />
			);


		return (
			<div className="container-fluid col-md-8 gamestable">
				<table className="table table-hover">
					<thead>
						<tr>
							<th style={{width: "250px", textAlign: "left"}}>Game</th>
							<th style={{textAlign: "left"}}>Viewers</th>
							<th className="text-muted">% of all</th>
							<th style={{textAlign: "left"}}>Streamers</th>
							<th className="text-muted">% of all</th>
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