import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ChannelStats extends React.Component {
	

	render() {
		const {channels, game, viewers, summary, status, logo} = this.props;
		const percentageOfTotal = Math.round(((this.props.viewers / this.props.summary.viewers) * 100) * 10) / 10; 
		console.log(game);
		return (
			<tr className="main">
				<td>
				<img className="small" src={logo} />
				</td>
				<td>
				{channels} <br />
				<span className="text-muted small">{game}</span>
				</td>
				<td>
				{viewers.toLocaleString()}
				</td>
				<td>
				{percentageOfTotal}%
				</td>
				<td className="text-muted small">
				<em>{status}</em>
				</td>
			</tr>
				)
	}
}