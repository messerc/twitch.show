import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class GameStats extends React.Component {
	render() {
		const {game, viewers, summary} = this.props;
		const percentageoftotal = Math.round((this.props.viewers / this.props.summary.viewers) * 100); 
		return (
		<tr>
			<td>
			{game}
			</td>
			<td className="text-muted">
			{viewers.toLocaleString()}
			</td>
			<td>
			{percentageoftotal}%
			</td>
		</tr>
			)
	}
}