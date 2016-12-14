import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
import GameLineChart from './GameLineChart.jsx';


export default class GameStats extends React.Component {

	render() {
		const {game, viewers, summary, streamers, logo} = this.props;
		const gameparam = encodeURIComponent(game);
		const percentageOfTotalViewers = Math.round((viewers / summary.viewers) * 100) 
		const percentageOfTotalStreamers = Math.round((streamers / summary.channels) * 100)

		return (
			<tr className="main">
				<td>
				<img className="small" src={logo} />
				</td>
				<td style={{textAlign: "left"}}>
					<Link to={ `game/${gameparam}` }>
					{game}
					</Link>
				</td>
				<td>
				{viewers.toLocaleString()}
				</td>
				<td>
				{percentageOfTotalViewers}%
				</td>
			</tr>
			)
	}	
}
