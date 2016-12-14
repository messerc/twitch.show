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
					<tbody>
						<tr>
							<th style={{width: "70px", textAlign: "left"}}></th>
							<th style={{width: "150px", textAlign: "left"}}>Game</th>
							<th className="text-muted">Viewers</th>
							<th style={{textAlign: "left"}}>Streamers</th>
							<th className="text-muted"></th>
						</tr>
						{gamesToRender}
					</tbody>
				</table>
			</div>
			)
	}
}