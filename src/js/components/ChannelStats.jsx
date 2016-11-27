import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ChannelStats extends React.Component {

	

	render() {
		const {channels, game, viewers, summary} = this.props;
		const percentageoftotal = Math.round((this.props.viewers / this.props.summary.viewers) * 100); 
		return (
		<tr>
			<td>
			{channels}
			</td>
			<td className="text-muted">
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