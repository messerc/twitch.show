import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';


export default class GamesChart extends React.Component {

	render() {
		const { summary, data, rank } = this.props;
		const { game, viewers, streamer, title, banner, url } = this.props.data;
		const percentageOfTotalViewers = Math.round((viewers / summary.viewers) * 100)
		const trimmedString = streamer.length > 12 ? streamer.substring(0, 12) + "..." : streamer;
		return(
			<div className="col-lg-3 col-lg-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1 well well-sm gamecard" onClick={() => window.location.href = url}>
				<div className="col-xs-6 frame">
					<img src={banner} /><br />
					{trimmedString}<br />
					<span className="text-muted">rank: {rank}</span>
				</div>
				<div className="col-xs-6 mute">
					<h3><strong>{viewers.toLocaleString()}</strong></h3><h6 className="text-muted">watching</h6>
					<h3><strong>{percentageOfTotalViewers}%</strong></h3><h6 className="text-muted"> of game's viewers</h6>
				</div>
				<div className="well well-sm frame" id="gamename">
					<span className="text-muted">{title}</span>
				</div>
			</div>
				)
			}	
	}
