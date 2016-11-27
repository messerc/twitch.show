import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ChannelStats from './ChannelStats.jsx';

export default class ChannelTable extends React.Component {

	render() {
		const channelarray = this.props.channels.streams;

		const channelstorender = channelarray.map((data) => 
			<ChannelStats key={data._id} 
						  channels={data.channel.display_name} 
						  game={data.channel.game} 
						  viewers={data.viewers} 
						  summary={this.props.summary} />
			);


		return (
			<div className="container-fluid col-md-6 gamestable">
			<h4 className="text-muted"><strong>Top Streams</strong></h4>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>streamer</th>
							<th>game</th>
							<th>viewers</th>
							<th>% of twitch</th>
						</tr>
					</thead>
					<tbody>
						{channelstorender}
					</tbody>
				</table>
			</div>
			)
	}
}