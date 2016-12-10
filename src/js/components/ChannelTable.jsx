import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ChannelStats from './ChannelStats.jsx';

export default class ChannelTable extends React.Component {

	render() {
		const channelArray = this.props.channels.streams;

		const channelsToRender = channelArray.map((data) => 
			<ChannelStats key={data._id} 
						  channels={data.channel.display_name} 
						  game={data.channel.game} 
						  viewers={data.viewers} 
						  summary={this.props.summary}
						  status={data.channel.status}
						  logo={data.channel.logo} />
			);


		return (
			console.log(channelArray),
			<div className="container-fluid col-md-8 gamestable">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>
							</th>
							<th>streamer</th>
							<th>viewers</th>
							<th>% of twitch</th>
							<th>title</th>
						</tr>
					</thead>
					<tbody>
						{channelsToRender}
					</tbody>
				</table>
			</div>
			)
	}
}