import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

export default class GameStats extends React.Component {


	render() {
		const {game, viewers, summary} = this.props;
		const gameparam = encodeURIComponent(this.props.game);
		const percentageOfTotal = Math.round(((this.props.viewers / this.props.summary.viewers) * 100) * 10) / 10 
		console.log(this.props.game);
		return (
		<tr>
			<td>
				<Link to={ `game/${gameparam}` }>
				{game}
				</Link>
			</td>
			<td className="text-muted">
			<strong>{viewers.toLocaleString()}</strong>
			</td>
			<td>
			{percentageOfTotal}%
			</td>
		</tr>

			)
	}	
}
