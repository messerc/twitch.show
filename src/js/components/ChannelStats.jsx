import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ChannelStats extends React.Component {
	

	render() {
		const {channels, game, viewers, summary, status} = this.props;
		const percentageOfTotal = Math.round(((this.props.viewers / this.props.summary.viewers) * 100) * 10) / 10; 

		return (
			<tr>
				<td>
				{channels} <br />
				<span className="text-muted small">{game}</span>
				</td>
				<td className="text-muted small">
				{status}
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