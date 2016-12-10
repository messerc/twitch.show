import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

export default class GameStats extends React.Component {


	render() {
		const {game, viewers, summary, streamers} = this.props;
		const gameparam = encodeURIComponent(this.props.game);
		const percentageOfTotalViewers = Math.round((this.props.viewers / this.props.summary.viewers) * 100) 
		const percentageOfTotalStreamers = Math.round((this.props.streamers / this.props.summary.channels) * 100)
		console.log(this.props.game);
		return (
		<tr className="main">
			<td style={{textAlign: "left"}}>
				<Link to={ `game/${gameparam}` }>
				{game}
				</Link>
			</td>
			<td style={{textAlign: "left"}}>
			{viewers.toLocaleString()}
			</td>
			<td className="text-muted">
			{percentageOfTotalViewers}%
			</td>
			<td style={{textAlign: "left"}}>
			{streamers.toLocaleString()}
			</td>
			<td className="text-muted">
			{percentageOfTotalStreamers}%
			</td>
		</tr>

			)
	}	
}
