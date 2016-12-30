import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';

export default class Header extends React.Component {

	render() {
		return (
			<div className="starter">
				<h1>twitch.show</h1>
				<h3 style={{marginTop: "0px"}}><strong>{this.props.summary.viewers.toLocaleString()}</strong> <span className="text-muted small"> watching </span> </h3>
				<h3 style={{marginTop: "0px"}}><strong>{this.props.summary.channels.toLocaleString()}</strong> <span className="text-muted small"> streaming </span> </h3>
			</div>
			)
	}
}