import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ChannelStats extends React.Component {
	

	render() {
		const {channels, game, viewers, summary, status, logo, rank, url} = this.props;
		const percentageOfTotalViewers = Math.round(((viewers / summary.viewers) * 100) * 10) / 10; 
		const trimmedString = channels.length > 12 ? channels.substring(0, 12) + "..." : channels;
		return (
			<div className="col-xl-2 col-xl-offset-1 col-lg-3 col-lg-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1 well well-sm gamecard" onClick={() => window.location.href = url}>
				<div className="col-xs-6 frame">
					<img src={logo} /><br />
					{trimmedString}<br />
					<span className="text-muted">rank: {rank}</span>
				</div>
				<div className="col-xs-6 mute">
					<h3><strong>{viewers.toLocaleString()}</strong></h3><h6 className="text-muted">watching</h6>
					<h3><strong>{percentageOfTotalViewers}%</strong></h3><h6 className="text-muted"> of twitch</h6>
				</div>
				<div className="well well-sm" id="gamename">
					Game: {game} <br />
					<span className="text-muted">{status}</span>
				</div>
			</div>
				)
	}
}