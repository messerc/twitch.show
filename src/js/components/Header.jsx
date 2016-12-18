import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

export default class Header extends React.Component {


	render() {
		const {secondcounter, minutecounter} = this.props;
		return (
			<div className="starter">
				<h1 className="largefont">twitch.show</h1>
				<h3 style={{marginTop: "0px"}}><strong>{this.props.summary.viewers.toLocaleString()}</strong> <span className="text-muted"> viewers </span> </h3>
				<h3 style={{marginTop: "0px"}}><strong>{this.props.summary.channels.toLocaleString()}</strong> <span className="text-muted"> channels </span> </h3>
				<h5>showing for: {minutecounter} minutes and {secondcounter} seconds</h5>
			</div>
			)
	}
}