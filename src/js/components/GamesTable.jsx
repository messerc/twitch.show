import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameStats from './GameStats.jsx';

export default class GamesTable extends React.Component {

	render() {
		const gameArray = this.props.games.top;
		const gamesToRender = gameArray.map( (data, i) => 
			<GameStats key={i} 
				       rank={i+1}
					   game={data.game.name} 
					   viewers={data.viewers} 
					   streamers={data.channels} 
					   summary={this.props.summary}
					   logo={data.game.box.medium}
					   historic={this.props.historicGame}
					   />
			);

		return (
			<div className="container-fluid col-md-8" style={{marginTop: '50px'}}>
				<div className="row"> 
					{gamesToRender}
				</div>
			</div>
			)
	}
} 