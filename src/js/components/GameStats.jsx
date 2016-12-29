import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import GameLineChart from './GameLineChart.jsx';


export default class GameStats extends React.Component {

	render() {
		const {game, viewers, summary, streamers, logo, rank} = this.props;
		const gameparam = encodeURIComponent(game);
		const percentageOfTotalViewers = Math.round((viewers / summary.viewers) * 100) 
		const percentageOfTotalStreamers = Math.round((streamers / summary.channels) * 100)
		return (
			<Link to={ `game/${gameparam}` }>
				<div className="col-lg-3 col-lg-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1 well well-sm gamecard">
					<div className="col-xs-6 frame">
						<img src={logo} /><br />
						<span className="text-muted">rank: {rank}</span>
					</div>
					<div className="col-xs-6 mute">
						<h3><strong>{viewers.toLocaleString()}</strong></h3><h6 className="text-muted">watching</h6>
						<h3><strong>{percentageOfTotalViewers}%</strong></h3><h6 className="text-muted"> of twitch</h6>
					</div>
					<div className="well well-sm" id="gamename">
						{game}
					</div>
				</div>
			</Link>
			)
	}	
}
