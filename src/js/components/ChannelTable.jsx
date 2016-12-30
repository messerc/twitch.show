import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ChannelStats from './ChannelStats.jsx';

export default class ChannelTable extends React.Component {

	render() {
		const channelArray = this.props.channels.streams;

		const channelsToRender = channelArray.map((data, i) => 
			<ChannelStats key={data._id} 
						  rank={i+1}
						  channels={data.channel.display_name} 
						  game={data.channel.game} 
						  viewers={data.viewers} 
						  summary={this.props.summary}
						  status={data.channel.status}
						  logo={data.channel.logo} />
			);


		return (
			<div className="container-fluid col-md-8 gamestable">
				{channelsToRender}
			</div>
			)
	}
}